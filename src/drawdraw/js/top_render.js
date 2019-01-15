
/**
 * Ben Fisher, 2010
 * @license GNU General Public License version 3
 * https://www.gnu.org/licenses/gpl-3.0.txt
 * https://github.com/moltenjs/labs_youthful_projects
 */
 
 function drawArrow(domObj, rawShape, noAdd)
{
    if (!g_ui.mapObjIdToArrow) {
        g_ui.mapObjIdToArrow = {}
    }
    
    // based on: http://taitems.tumblr.com/post/549973287/drawing-arrows-in-raphaeljs
    if (!g_ui.mapObjIdToArrow[domObj.id])
    {
        g_ui.mapObjIdToArrow[domObj.id] = r.path('M1,1,L,1,1' );
    }
    
    var arsize = 6 * g_resizeFactor;
    var anglerad = Math.atan2(rawShape.x1 - rawShape.x2, rawShape.y2 - rawShape.y1);
    angle = (anglerad / (2 * Math.PI)) * 360;
    var locx = rawShape.x2// + 4 * g_resizeFactor * Math.cos(anglerad)
    var locy = rawShape.y2// + 4 * g_resizeFactor * Math.sin(anglerad)
    g_ui.mapObjIdToArrow[domObj.id].attr({path:
        "M" + locx + " " + locy + " L" + (locx - arsize) + " " + (locy - arsize) +
        " L" + (locx - arsize) + " " + (locy + arsize) + " L" + locx + " " + locy });
        
    g_ui.mapObjIdToArrow[domObj.id].attr("fill", "#922").attr("stroke", "#922").rotate((90+angle), locx, locy);
    g_ui.mapObjIdToArrow[domObj.id].attr('stroke-width', g_resizeFactor);
    
    //move arrow head behind the line
    g_ui.mapObjIdToArrow[domObj.id].toBack(); 
    if (noAdd)
    {
        // don't add to dict
        var ret = g_ui.mapObjIdToArrow[domObj.id];
        delete g_ui.mapObjIdToArrow[domObj.id];
        return ret
    }
    else
    {
        return g_ui.mapObjIdToArrow[domObj.id]
    }
}

function removeArrows()
{
    for (var key in g_ui.mapObjIdToArrow)
    {
        g_ui.mapObjIdToArrow[key].remove()
    }
    
    g_ui.mapObjIdToArrow = {}
}

function renderAllLines(arResults)
{
    if (!g_ui.oneLineGraphic)
    {
        g_ui.oneLineGraphic = r.path('M1,1,L,1,1' );
    }
    
    if (!arResults)
    {
        g_ui.oneLineGraphic.attr( 'path', 'M1,1,L,1,1' );
    }
    else
    {
        var allpath = arResults.join(' ')
        g_ui.oneLineGraphic.attr('path', allpath)
    }
}

function render_hideAllShapes()
{
    for (var i=0; i < grcpoolCircles.length; i++) 
    {
        g_ui.grcpoolCircles[i].hide()
    }
}

function renderCircle(rawShape)
{
    g_ui.ngrcpoolCircles++;
    if (g_ui.ngrcpoolCircles >= g_ui.grcpoolCircles.length)
    {
        g_ui.grcpoolCircles.push(r.circle(1,1,1));
    }
    
    g_ui.grcpoolCircles[g_ui.ngrcpoolCircles].show()
    updatePath(g_ui.grcpoolCircles[g_ui.ngrcpoolCircles], rawShape)
}

// draws only the path.
// colors, arrows, and any ornamentation should be drawn elsewhere. (e.g. refreshShape())
function updatePath(domObj, rawShape)
{
    if (rawShape.type=='l' || rawShape.type=='lgen') 
    {
        var sNewPath = 'M' + rawShape.x1.toString() + ',' + rawShape.y1.toString() +
            ',L' + rawShape.x2.toString() + ',' + rawShape.y2.toString();
        domObj.attr('path',sNewPath);
    }
    else if (rawShape.type=='c')
    {
        domObj.attr({cx:rawShape.x1,cy:rawShape.y1, r:rawShape.rx});
    }
    else
    {
        alerd('error: unknown shapetype');
    }
}

