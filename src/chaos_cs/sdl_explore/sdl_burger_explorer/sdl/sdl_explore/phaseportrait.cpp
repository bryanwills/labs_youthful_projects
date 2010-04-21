

#include "phaseportrait.h"

#include <math.h>
void DrawBasinQuick( SDL_Surface* pSurface, PhasePortraitSettings*settings, double c1, double c2) ;

void InitialSettings(PhasePortraitSettings*settings, int width, int height, double *outA, double *outB)
{
	settings->seedsPerAxis = 40;
	settings->settling = 48;
	settings->drawing = 20; //also, # of iters for the Basins mode.
	settings->drawBasin = 0;

	if (StringsEqual( MAPEXPRESSIONTEXT, HENONTEXT)) {
	settings->browsex0 = -1;
	settings->browsex1 = 3; //non sqr axes?
	settings->browsey0 = -1;
	settings->browsey1 = 1;

	settings->x0 = -1.75;
	settings->x1 = 1.75;
	settings->y0 = -1.75;
	settings->y1 = 1.75;
	settings->width = width;
	settings->height = height;

	*outA=-1.1;
	*outB= 1.72;
	} else {
	settings->browsex0 = -2;
	settings->browsex1 = 2;
	settings->browsey0 = -.5;
	settings->browsey1 = 3.5;

	settings->x0 = -1.75;
	settings->x1 = 1.75;
	settings->y0 = -1.75;
	settings->y1 = 1.75;
	settings->width = width;
	settings->height = height;

	*outA=-1.1;
	*outB= 1.72;
	}
}

/*inline*/ void plotpoint(SDL_Surface* pSurface, int px, int py)
{
 if (!(px>=PlotX && px<=PlotX+PlotWidth && py>=0 && py<=PlotHeight))
	 return;
  char* pPosition = ( char* ) pSurface->pixels ; //determine position
  pPosition += ( pSurface->pitch * py ); //offset by y
  pPosition += ( pSurface->format->BytesPerPixel * px ); //offset by x
  Uint32 newcol = 0x00ff0000; //0;
  memcpy ( pPosition , &newcol , pSurface->format->BytesPerPixel ) ;
}
void DrawPlotGrid( SDL_Surface* pSurface, PhasePortraitSettings*settings, double c1, double c2 ) 
{
	//find zero, zero
	int xzero, yzero;
	DoubleCoordsToInt(settings, 0.0, 0.0, &xzero, &yzero);

	for (int y=0; y<PlotHeight; y++)
		plotpoint(pSurface, PlotX, y);
	if (xzero>PlotX && xzero<PlotX+PlotWidth)
		for (int y=0; y<PlotHeight; y++)
			plotpoint(pSurface, (xzero), y);
	for (int y=0; y<PlotHeight; y++)
		plotpoint(pSurface, PlotX+PlotWidth, y);

	for (double f=-4; f<5; f+=1)
	{
		int xtic, ytic;
		DoubleCoordsToInt(settings, f,f, &xtic, &ytic);
		if (xzero>PlotX && xzero<PlotX+PlotWidth)
		for (int y=yzero-5; y<yzero+5; y++)
			plotpoint(pSurface, (xtic), y);
		if (yzero>=0&& yzero<=PlotHeight)
		for (int x=xzero-5; x<xzero+5; x++)
			plotpoint(pSurface, x, ytic);
	}


	for (int x=PlotX; x<PlotWidth+PlotX; x++)
		plotpoint(pSurface, x, 1);
	if (yzero>=0&& yzero<=PlotHeight)
		for (int x=PlotX; x<PlotWidth+PlotX; x++)
			plotpoint(pSurface, x, yzero);
	for (int x=PlotX; x<PlotWidth+PlotX; x++)
		plotpoint(pSurface, x, PlotHeight);
	
	int ia, ib;
	DoubleCoordsToInt(settings, c1, c2, &ia, &ib);
	for (int x=ia-4; x<ia+5; x++)
		for (int y=ib-4; y<ib+5; y++)
				plotpoint(pSurface, x, y);
	
}

void DrawPhasePortrait( SDL_Surface* pSurface, PhasePortraitSettings*settings, double c1, double c2 ) 
{
	if (settings->drawBasin) return DrawBasinQuick(pSurface,settings,c1,c2);
	double sx0= -2, sx1=2, sy0= -2, sy1=2;

	int nXpoints=settings->seedsPerAxis;
	int nYpoints=settings->seedsPerAxis;
	int height=settings->height;
	int width=settings->width;
	double sxinc = (nXpoints==1) ? 1e6 : (sx1-sx0)/(nXpoints-1);
	double syinc = (nYpoints==1) ? 1e6 : (sy1-sy0)/(nYpoints-1);

	double x_,x,y;
	double X0=settings->x0, X1=settings->x1, Y0=settings->y0, Y1=settings->y1;


	for (double sx=sx0; sx<=sx1; sx+=sxinc)
            {
                for (double sy=sy0; sy<=sy1; sy+=syinc)
                {
                    x = sx; y=sy;

					for (int ii=0; ii<(settings->settling); ii++)
                    {
						MAPEXPRESSION;
                        x=x_; 
						if (ISTOOBIG(x)||ISTOOBIG(y)) break;
                    }
					for (int ii=0; ii<(settings->drawing); ii++)
                    {
						MAPEXPRESSION;
                        x=x_;
						if (ISTOOBIG(x)||ISTOOBIG(y)) break;

                        int px = (int)(width * ((x - X0) / (X1 - X0)));
                        int py = (int)(height - height * ((y - Y0) / (Y1 - Y0)));
                        if (py >= 0 && py < height && px>=0 && px<width)
						{
							//get pixel color, mult by 0.875 (x-x>>3)
  Uint32 col = 0 ; Uint32 colR;
  
  char* pPosition = ( char* ) pSurface->pixels ; //determine position
  pPosition += ( pSurface->pitch * py ); //offset by y
  pPosition += ( pSurface->format->BytesPerPixel * px ); //offset by x
  memcpy ( &col , pPosition , pSurface->format->BytesPerPixel ) ; //copy pixel data

  SDL_Color color ;
  SDL_GetRGB ( col , pSurface->format , &color.r , &color.g , &color.b ) ;
  colR = color.r;
							
						// a quick mult, stops at 7, but whatever
						//int newcolor = (color.r)-((color.r)>>3);
						Uint32 newcolor = (colR)-((colR)>>2);
						//int newcolor = ((color.r)>>2)+((color.r)>>3); //5/8

  Uint32 newcol = SDL_MapRGB ( pSurface->format , newcolor , newcolor , newcolor ) ;
  memcpy ( pPosition , &newcol , pSurface->format->BytesPerPixel ) ;

				}
            }
        }
    }
}

//#define SCALEDOWN 4
#define SCALEDOWN 1
void DrawBasinQuick( SDL_Surface* pSurface, PhasePortraitSettings*settings, double c1, double c2) 
{
	if (SDL_MUSTLOCK(pSurface)) SDL_LockSurface ( pSurface ) ;

	double fx,fy, x_,x,y;

	int height=settings->height;
	int width=settings->width;
	double X0=settings->x0, X1=settings->x1, Y0=settings->y0, Y1=settings->y1;
	
    double dx = (X1 - X0) / width, dy = (Y1 - Y0) / height;
    fx = X0; fy = Y1; //y counts downwards
	 char* pPosition;
    for (int py=0; py<height; py+=SCALEDOWN)
        {
			fx=X0;
	 for (int px = 0; px < width; px+=SCALEDOWN)
    {
        
        x=fx; y=fy;
		for (int i=0; i<settings->drawing; i++)
		{
			MAPEXPRESSION;
            x=x_;
			if (ISTOOBIG(x)||ISTOOBIG(y)) break;
		}
		/*double distance = sqrt( (x-fx)*(x-fx)+(y-fx)*(y-fx)) / 20;
		if (y<0) distance *= -1;
		double val = distance;*/
		double val;
		if (ISTOOBIG(x)||ISTOOBIG(y))
			val=1.0;
		else{
			//double diffx = (x) - (c1*x - y*y);
			//double diffy = (y) - (c2*y + x*y);
            val = sqrt(fabs(x));
			if (y<0) val*=.8;
		}

		if (val>1.0) val=1.0; if (val<0.0) val=0.0;
		val = val*2 - 1; //from -1 to 1
		Uint32 r,g,b;
		if (val<=0)
			b=255, r=g= (Uint32) ((1+val)*255.0);
		else
			r=g=b= (Uint32) ((1-val)*255.0);
			
  
for (int ncy=0; ncy<SCALEDOWN; ncy++){
for (int ncx=0; ncx<SCALEDOWN; ncx++){

  pPosition = ( char* ) pSurface->pixels ; //determine position
  pPosition += ( pSurface->pitch * (py+ncy) ); //offset by y
  pPosition += ( pSurface->format->BytesPerPixel * (px+ncx) ); //offset by x
  Uint32 newcol = SDL_MapRGB ( pSurface->format , r , g , b ) ;
  memcpy ( pPosition , &newcol , pSurface->format->BytesPerPixel ) ;
}}


        fx += dx*SCALEDOWN;
        }
            fy -= dy*SCALEDOWN;
    }

	if (SDL_MUSTLOCK(pSurface)) SDL_UnlockSurface ( pSurface ) ;
}


