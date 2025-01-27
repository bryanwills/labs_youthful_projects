
/**
 * Ben Fisher, 2010
 * @license GNU General Public License version 3
 * https://www.gnu.org/licenses/gpl-3.0.txt
 * https://github.com/moltenform/labs_youthful_projects
 */

"use strict";

var Ra = null; // main raphael instance
var g_state = { inited: false };
var g_ui = { inited: false };

function doesHaveJson() {
    if (document.location.href.indexOf("#") != -1) {
        var sJson = document.location.href.substring(
            document.location.href.indexOf("#") + 1
        );

        if (sJson && sJson.length > 0 && !sJson.startsWith("blank")) {
            return sJson;
        }
    }

    return undefined;
}

g_state.init = function(self) {
    if (self.inited) {
        return;
    }

    // for perf tests
    self.debugMeasureTiming = false;

    // for perf tests
    self.debugMeasureTimingTimer = undefined;

    // is the document dirty?
    self.hasUserChanges = false;

    // we could guard against Error: <path> attribute d: Expected number, "…094e+38M500,"
    // but it seems harmless
    self.checkVeryLargeNumbers = false;

    // zoom, default to 1
    self.zoomLevel = 1;

    // number of shapes to draw, can be adjusted by user
    self.nShapesToDraw = 300;

    // this option can be enabled by the user, where we'll draw just the perimeter.
    self.nJustPerimeter = 0;

    self.compression = new CCompressCommonTermsDrawdraw();
    self.inited = true;
};

g_ui.init = function(self) {
    if (self.inited) {
        return;
    }

    Ra = Raphael("canvasholder");

    self.domSelected = undefined;
    self.isRendering = false;

    // record what shapes have been created.
    self.domToCoordObject = {};

    // compensate for devicePixelRatio
    self.resizeFactor = 1;

    // holding dom objects is not ideal... we're past the the days of ie memory leaks though.
    self.shapeSelectA = null;
    self.shapeSelectB = null;

    self.allLines = [];
    self.initPools(self);

    // adjust selection handle size on screens with high dpi (on my lg30 it is "4")
    self.resizeFactor = 1;
    if (window.devicePixelRatio !== undefined) {
        self.resizeFactor *= window.devicePixelRatio;
    }

    if (window.devicePixelRatio !== undefined && window.devicePixelRatio > 1) {
        // consider multiplying self.resizeFactor here
    }

    // compensate for screen size
    self.lastSeenWidth = 1
    self.lastSeenHeight = 1
    self.offsetInputX = 2
    self.offsetInputY = 2
    self.offsetOutputX = 3
    self.pendingScreenSizeUpdate = null
    updateAfterScreenSizeChanges()

    self.oneLineGraphic = Ra.path("M1,1,L,1,1");

    // draw selection handles
    var handlesize = 4 * self.resizeFactor;
    self.shapeSelectA = Ra.ellipse(1, 1, handlesize, handlesize).attr({
        "stroke-width": 1
    });
    self.shapeSelectB = Ra.ellipse(1, 1, handlesize, handlesize).attr({
        "stroke-width": 1
    });
    self.shapeSelectA.attr({ fill: "#0f0", opacity: 1 });
    self.shapeSelectB.attr({ fill: "#0f0", opacity: 1 });
    self.shapeSelectA.drag(
        onDragResize_move,
        onDragResize_start,
        onDragResize_up
    );
    self.shapeSelectB.drag(
        onDragResize_move,
        onDragResize_start,
        onDragResize_up
    );

    self.mainContextShape = new CRawShape({
        type: "lgen",
        x1: self.offsetInputX,
        x2: self.offsetInputX,
        y1: self.offsetInputY + 50,
        y2: self.offsetInputY - 50
    });

    self.mainGenPath = Ra.path("M1,1,L,1,1").attr({
        "stroke-width": 6 * self.resizeFactor
    });
    updatePath(self.mainGenPath, self.mainContextShape);
    self.mainGenPath.attr({ stroke: "#888" });

    self.wasEverInited = true;
    self.inited = true;
};

g_ui.initPools = function(self) {
    var poolCirclesCreate = function() {
        return Ra.circle(1, 1, 1);
    };

    var poolCirclesReset = function(obj) {
        obj.hide();
    };

    self.poolCircles = new CResourcePool(poolCirclesCreate, poolCirclesReset);
};

g_ui.teardown = function(self) {
    self.poolCircles.clearAll();
    self.shapeSelectA.hide();
    self.shapeSelectB.hide();
};

function loadDefaultDoc() {
    // create a normal line, as an example
    createNew("l");
    var oCoord = g_ui.domToCoordObject[g_ui.domSelected.id];
    oCoord.x1 = g_ui.mainContextShape.x1;
    oCoord.y1 = g_ui.mainContextShape.y1;
    oCoord.x2 = g_ui.mainContextShape.x2;
    oCoord.y2 = g_ui.mainContextShape.y2;
    refreshShape(g_ui.domSelected);

    // create a normal lgen, as an example
    createNew("lgen");
    oCoord = g_ui.domToCoordObject[g_ui.domSelected.id];
    oCoord.x1 = g_ui.mainContextShape.x1;
    oCoord.y1 = g_ui.mainContextShape.y1;
    oCoord.x2 = g_ui.mainContextShape.x2 + 40;
    oCoord.y2 = g_ui.mainContextShape.y2 + 50;
    refreshShape(g_ui.domSelected);
}

function on_locationhashchange() {
    // reset the entire ui
    g_ui.teardown(g_ui);
    Ra = null; // main raphael instance
    $("canvasholder").innerHTML = "";
    g_state.inited = false;
    g_ui.inited = false;
    initAll();
}

function scheduleUpdateAfterScreenSizeChanges() {
    if (g_ui.pendingScreenSizeUpdate) {
        window.clearTimeout(g_ui.pendingScreenSizeUpdate);
    }

    g_ui.pendingScreenSizeUpdate = window.setTimeout(function() {
        updateAfterScreenSizeChanges();
    }, 200);
}

function updateAfterScreenSizeChanges() {
    var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (viewportW !== g_ui.lastSeenWidth || viewportH !== g_ui.lastSeenHeight) {
        setSizeLeftBtns()
        var marginX = Math.round($("idbtntheta").offsetLeft + $("idbtntheta").offsetWidth)
        var marginY = 5
        $('canvasholder').style.left = marginX + 'px'
        $('canvasholder').style.top = marginY + 'px'

        // set the actual sizes in the DOM
        var divW = viewportW - (marginX - 10)
        var divH = viewportH - (marginY - 10)
        divW = Math.max(1, divW)
        divH = Math.max(1, divH)
        $('canvasholder').style.width = divW + 'px'
        $('canvasholder').style.height = divH + 'px'
        Ra.setSize(divW, divH)

        g_ui.lastSeenWidth = viewportW
        g_ui.lastSeenHeight = viewportH

        // currently slightly hard-coded.
        // todo: base this on viewportW instead
        if (g_ui.resizeFactor > 1) {
            g_ui.offsetInputX = 40
            g_ui.offsetInputY = 90
        } else {
            g_ui.offsetInputX = 200
            g_ui.offsetInputY = 150
        }

        // halfway between w and reserveWidthForInput
        var reserveWidthForInput = g_ui.offsetInputX + 100
        g_ui.offsetOutputX = Math.round((reserveWidthForInput + viewportW)/2) - 300

        // hide all the current/cached output
        renderAllLines(false);
        if (g_ui.poolCircles) {
            g_ui.poolCircles.clearAll();
        }
        if (g_ui.inited) {
            doTransformRender();
        }
    }
}

function initAll() {
    if (!g_ui.wasEverInited) {
        var whenBubbling = false;
        window.addEventListener(
            "hashchange",
            on_locationhashchange,
            whenBubbling
        );
        window.addEventListener(
            "resize",
            scheduleUpdateAfterScreenSizeChanges,
            whenBubbling
        );

        $("idbtnaddline").addEventListener(
            "click",
            on_btnaddline,
            whenBubbling
        );
        $("idbtnaddcircle").addEventListener(
            "click",
            on_btnaddcircle,
            whenBubbling
        );
        $("idbtnaddgen").addEventListener("click", on_btnaddgen, whenBubbling);
        $("idbtntheta").addEventListener("click", on_btntheta, whenBubbling);
        $("idbtndelete").addEventListener("click", on_btndelete, whenBubbling);
        $("idbtnonlyperim").addEventListener(
            "click",
            on_btnonlyperim,
            whenBubbling
        );
        $("idbtndrawmore").addEventListener(
            "click",
            on_btndrawmore,
            whenBubbling
        );
        $("idbtndrawless").addEventListener(
            "click",
            on_btndrawless,
            whenBubbling
        );
        $("idbtnzoomin").addEventListener("click", on_btnzoomin, whenBubbling);
        $("idbtnzoomout").addEventListener(
            "click",
            on_btnzoomout,
            whenBubbling
        );
        $("idbtnopenexample").addEventListener(
            "click",
            on_btnopenexample,
            whenBubbling
        );
        $("idbtnsave").addEventListener("click", on_btnsave, whenBubbling);
        $("welcometext").addEventListener(
            "click",
            function() {
                $("welcometext").style.display = "none";
            },
            whenBubbling
        );

        setSizeLeftBtns();
    }

    g_state.init(g_state);
    g_ui.init(g_ui);
    var sJson = doesHaveJson();
    if (sJson) {
        onLoadFromJsonRawObj(sJson);
        $("welcometext").style.display = "none";
    } else {
        loadDefaultDoc();
        setTimeout(doTransformRender, 50);
    }

    showSelect();
}

function refreshShape(domObj) {
    var oCoord = g_ui.domToCoordObject[domObj.id];
    updatePath(domObj, oCoord);

    if (oCoord.type === "lgen") {
        domObj.attr({ "arrow-end": "classic-wide-long" });
    }

    if (g_ui.domSelected) {
        showSelect();
    }
}

function createNew(stype) {
    if (stype == "l" || stype == "lgen") {
        var newEntity = Ra.path("M1,1,L,1,1");
        var newRawShape = new CRawShape({
            type: "l",
            x1: g_ui.mainContextShape.x2,
            y1: g_ui.mainContextShape.y2,
            x2: g_ui.mainContextShape.x2 + 30,
            y2: g_ui.mainContextShape.y2
        });

        newRawShape.type = stype;
        if (stype == "lgen") {
            newEntity.attr({ stroke: "#922", opacity: 1.0 });
        }
    } else if (stype == "c") {
        var newEntity = Ra.circle(1, 1, 1);
        var newRawShape = new CRawShape({
            type: "c",
            x1: g_ui.mainContextShape.x2,
            y1: g_ui.mainContextShape.y2,
            rx: 20
        });
    }

    g_ui.allLines.push(newEntity);
    g_ui.domToCoordObject[newEntity.id] = newRawShape;

    // draw the shape at its initial position
    refreshShape(newEntity);
    newEntity.mousedown(onMouseDownSelectIt);
    newEntity.attr({ "stroke-width": 4 * g_ui.resizeFactor });
    g_ui.domSelected = newEntity;
    showSelect();

    return newEntity;
}

function showSelect() {
    g_ui.shapeSelectA.show();
    g_ui.shapeSelectB.show();
    if (!g_ui.domSelected) {
        g_ui.shapeSelectA.hide();
        g_ui.shapeSelectB.hide();
        return;
    }

    var oCoord = g_ui.domToCoordObject[g_ui.domSelected.id];
    if (!oCoord) {
        errmsg("in showSelect, nothing selected?");
        return;
    }

    if (oCoord.type.startsWith("l")) {
        g_ui.shapeSelectA.attr({ cx: oCoord.x1, cy: oCoord.y1 });
        g_ui.shapeSelectB.attr({ cx: oCoord.x2, cy: oCoord.y2 });
    } else if (oCoord.type == "c") {
        g_ui.shapeSelectA.attr({ cx: oCoord.x1, cy: oCoord.y1 });
        g_ui.shapeSelectB.attr({ cx: oCoord.x1 + oCoord.rx, cy: oCoord.y1 });
    }

    // g_ui.shapeSelectB should be in front, so that circles aren't stuck small
    g_ui.shapeSelectA.toFront();
    g_ui.shapeSelectB.toFront();
}

function hideSelect() {
    g_ui.shapeSelectA.hide();
    g_ui.shapeSelectB.hide();
}

function countEntities() {
    var countGens = 0;
    var countShapes = 0;
    for (var key in g_ui.domToCoordObject) {
        if (g_ui.domToCoordObject[key].type === "lgen") {
            countGens++;
        } else {
            countShapes++;
        }
    }
    return [countGens, countShapes];
}

function deleteSelected() {
    if (!g_ui.domSelected) {
        return;
    }

    var a = countEntities();
    if (
        g_ui.domToCoordObject[g_ui.domSelected.id].type === "lgen" &&
        a[0] <= 1
    ) {
        alert(
            "This is the only generator - if you deleted it there wouldn't be a picture to show."
        );
        return;
    } else if (
        g_ui.domToCoordObject[g_ui.domSelected.id].type !== "lgen" &&
        a[1] <= 1
    ) {
        alert(
            "This is the only shape - if you deleted it there wouldn't be a picture to show."
        );
        return;
    }

    delete g_ui.domToCoordObject[g_ui.domSelected.id];
    hideSelect();
    g_ui.domSelected.remove();
    g_ui.domSelected = null;
}

function invisSelected() {
    if (g_ui.domSelected) {
        g_ui.domToCoordObject[g_ui.domSelected.id].visible = !g_ui
            .domToCoordObject[g_ui.domSelected.id].visible;
        refreshShape(g_ui.domSelected);
    }
}

function onMouseDownSelectIt(event) {
    if (this) {
        g_ui.domSelected = this;
        showSelect();
    }
}

function doTransformRender() {
    // prevent reentrance
    if (g_ui.isRendering) {
        return;
    }

    g_ui.isRendering = true;

    var gens = [];
    var objs = [];
    for (var objId in g_ui.domToCoordObject) {
        if (g_ui.domToCoordObject[objId].type == "lgen") {
            gens.push(g_ui.domToCoordObject[objId]);
        } else if (g_ui.domToCoordObject[objId].x1 !== undefined) {
            objs.push(g_ui.domToCoordObject[objId]);
        } else {
            errmsg("warning: something else in map");
        }
    }

    // make main reference into a context
    var mainContext = contextFromRawShape(g_ui.mainContextShape);
    var initialContext = mainContext;

    // convert shapes to be relative to initial context
    for (var i = 0; i < gens.length; i++) {
        gens[i] = rawShapeToRelativeShape(initialContext, gens[i]);
    }

    for (var i = 0; i < objs.length; i++) {
        objs[i] = rawShapeToRelativeShape(initialContext, objs[i]);
    }

    var contextQueue = [initialContext];
    var nAdjustX = g_ui.resizeFactor == 1 ? 300 : 80;

    if (g_state.debugMeasureTiming) {
        g_state.debugMeasureTimingTimer = Time.createTimer();
    }

    // it's a bit unclean that we do both the computation and the ui here
    transform(
        contextQueue,
        objs,
        gens,
        -1, // nThresholdBeforeDraw
        g_state.nShapesToDraw,
        nAdjustX
    );

    if (g_state.debugMeasureTiming) {
        console.log(g_state.debugMeasureTimingTimer.check());
    }

    g_ui.isRendering = false;
}

function setSizeLeftBtns() {
    var mult = 1;
    if (!(!window.devicePixelRatio || window.devicePixelRatio <= 1)) {
        mult = window.devicePixelRatio / 2;
    }

    var b = 16;
    $("idimgl").style.width = b * mult + "px";
    $("idimgl").style.height = b * mult + "px";
    $("idimgc").style.width = b * mult + "px";
    $("idimgc").style.height = b * mult + "px";
    $("idimglchild").style.width = b * mult + "px";
    $("idimglchild").style.height = b * mult + "px";
    var b = 16;
    $("idimgtheta").style.width = b * mult + "px";
    $("idimgtheta").style.height = b * mult + "px";
    $("idimgbin_closed").style.width = b * mult + "px";
    $("idimgbin_closed").style.height = b * mult + "px";
    $("idimgbullet_black").style.width = b * mult + "px";
    $("idimgbullet_black").style.height = b * mult + "px";
    $("idimgpencil_add").style.width = b * mult + "px";
    $("idimgpencil_add").style.height = b * mult + "px";
    $("idimgpencil_delete").style.width = b * mult + "px";
    $("idimgpencil_delete").style.height = b * mult + "px";
    $("idimgzoom_in").style.width = b * mult + "px";
    $("idimgzoom_in").style.height = b * mult + "px";
    $("idimgzoom_out").style.width = b * mult + "px";
    $("idimgzoom_out").style.height = b * mult + "px";
    $("idimgfolder_picture").style.width = b * mult + "px";
    $("idimgfolder_picture").style.height = b * mult + "px";
    $("idimgsave").style.width = b * mult + "px";
    $("idimgsave").style.height = b * mult + "px";
    return b * mult
}
