
int g_arr_size=0; int * g_arr=NULL;
void OnSetup(int width){}

// User code could be here
__inline int getValAt(SDL_Surface* pSurface, double fx, double fy, int width)
{
	double c1= g_settings->pc1,c2= g_settings->pc2,c3= g_settings->pc3;
	double c4= g_settings->pc4,c5= g_settings->pc5,c6= g_settings->pc6;
	double c1b= g_settings->pc1b,c2b= g_settings->pc2b,c3b= g_settings->pc3b;
	double c4b= g_settings->pc4b,c5b= g_settings->pc5b,c6b= g_settings->pc6b;
	int paramIters = g_settings->drawing; int paramSettling = g_settings->settling;
	double maxValue = 1; //intended to be overwritten by user code
	
	///// User code could be here
	
	double val = fx*fy + fabs(fx);
	
	return standardToColor(pSurface, val / (maxValue+g_settings->maxValueAddition));
}



