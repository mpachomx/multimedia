(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[672,1533,379,76],[289,1533,381,78],[1053,1574,379,76],[1434,1574,379,76],[672,1611,379,76],[483,1267,288,264],[773,1267,288,264],[0,1487,287,259],[0,0,1300,1006],[1063,1267,288,264],[483,1176,1154,89],[1353,1308,288,264],[0,1008,481,477],[1639,1028,308,278],[483,1028,933,146],[1643,1308,288,264],[1302,0,512,512],[1302,514,512,512]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Burro = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.caballo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cerdito = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fondoEscenario1 = function() {
	this.initialize(img.fondoEscenario1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5547,4006);


(lib.fondoEscenario2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gallo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.oprime = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.oveja = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.playboton2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.stop_png = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.vaca = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.volumen_mas = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.volumen_menos = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.cerdito_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Marrano");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.cerdito();
	this.instance.setTransform(-75,-75,0.5226,0.5791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6097,scaleY:0.6757},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,175,175);


(lib.btnVaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Vaca");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.vaca();
	this.instance.setTransform(-75,-75,0.5208,0.5682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6077,scaleY:0.6629,x:-87,y:-87},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-87,175,175);


(lib.btnStop2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.stop_png();
	this.instance.setTransform(-30,-30,0.1948,0.2158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.2727,scaleY:0.3021,x:-42,y:-42},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.stop_png();
	this.instance.setTransform(-30,-30,0.1948,0.2158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.2922,scaleY:0.3237,x:-45,y:-45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-94.8,-18.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(-95.3,-19.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-19.3,190.5,39);


(lib.btnPlay2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.playboton2();
	this.instance.setTransform(-30,-30,0.1247,0.1258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1746,scaleY:0.1761,x:-42,y:-42},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.playboton2();
	this.instance.setTransform(-30,-30,0.1247,0.1258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1663,scaleY:0.1677,x:-40,y:-40},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.btnOveja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Oveja");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.oveja();
	this.instance.setTransform(-75,-75,0.5208,0.5682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6076,scaleY:0.6629},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,175,175);


(lib.btnMenos2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.volumen_menos();
	this.instance.setTransform(-30,-30,0.1172,0.1172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1601,scaleY:0.1601,x:-41,y:-41},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41,82,82);


(lib.btnMenos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.volumen_menos();
	this.instance.setTransform(-30,-30,0.1172,0.1172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1563,scaleY:0.1563,x:-40,y:-40},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.btnMas2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.volumen_mas();
	this.instance.setTransform(-30,-30,0.1172,0.1172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.164,scaleY:0.164,x:-42,y:-42},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.btnMas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.volumen_mas();
	this.instance.setTransform(-30,-30,0.1172,0.1172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.1563,scaleY:0.1563,x:-40,y:-40},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.btnGallo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Gallo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.gallo();
	this.instance.setTransform(-75,-75,0.5208,0.5682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6076,scaleY:0.6629},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,175,175);


(lib.btnCaballo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Caballo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.caballo();
	this.instance.setTransform(-75,-75,0.5208,0.5682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6181,scaleY:0.6743,x:-89,y:-89},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89,178,178);


(lib.btnBurro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Burro_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Burro();
	this.instance.setTransform(-75,-75,0.5208,0.5682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.6076,scaleY:0.6629},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,175,175);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.oprime();
	this.instance.setTransform(-318.3,-24.55,0.5517,0.5517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.3,-24.5,636.7,49.1);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.oprime();
	this.instance.setTransform(-318.35,-24.55,0.5517,0.5517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.3,-24.5,636.6,49.1);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(-471.1,-73.7,1.0099,1.0099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.1,-73.7,942.3,147.5);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(-399.2,-62.45,0.8557,0.8557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.2,-62.4,798.4,124.9);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(-300.2,-47,0.6435,0.6435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.2,-47,600.4,94);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(-213.2,-33.35,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.2,-33.3,426.4,66.69999999999999);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(-134.2,-21,0.2877,0.2877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.2,-21,268.4,42);


(lib.cpTitulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(0.2,0);

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(0.2,0.35);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación3("synched",0);
	this.instance_2.setTransform(0.2,0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolación4("synched",0);
	this.instance_3.setTransform(0.2,0.45);
	this.instance_3._off = true;

	this.instance_4 = new lib.Interpolación5("synched",0);
	this.instance_4.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:0.35},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,y:0},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},10).to({_off:true,y:0.45},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},10).to({_off:true,x:0.1,y:0.7},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471,-73,942.3,147.5);


(lib.cpIntrucciones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación6("synched",0);
	this.instance.setTransform(-190.65,17.55);

	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(138.3,17.55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:138.3},24).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},24).to({x:-183.7},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-509,-7,965.7,49.1);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = createjs.Sound.play("audio2Mp3", {loop: -1});
		
		function detenerSonido2(){
				sonido.stop();
			}
		
		function iniciarSonido2(){
				sonido.play();
			}
		
		this.btnStop2.addEventListener("click", detenerSonido2);
		this.btnPlay2.addEventListener("click", iniciarSonido2);
		
		// Volumen
		
		sonido.volume = 0.5;
		
		function masVolumen2(){
		 if(sonido.volume < 1){ sonido.volume+=0.1;};	
			}
		
		function menosVolumen2(){
		 if(sonido.volume > 0){ sonido.volume-=0.1;};	
			}
		
		this.btnMas2.addEventListener("click", masVolumen2);
		this.btnMenos2.addEventListener("click", menosVolumen2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// oveja
	this.instance = new lib.btnOveja();
	this.instance.setTransform(801,403);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gallo
	this.instance_1 = new lib.btnGallo();
	this.instance_1.setTransform(474,403);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// caballo
	this.instance_2 = new lib.btnCaballo();
	this.instance_2.setTransform(126,403);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cerdito
	this.instance_3 = new lib.cerdito_1();
	this.instance_3.setTransform(801,211);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Burro
	this.instance_4 = new lib.btnBurro();
	this.instance_4.setTransform(474,211);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// vaca
	this.instance_5 = new lib.btnVaca();
	this.instance_5.setTransform(131,211);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// btnMenos
	this.btnMenos2 = new lib.btnMenos2();
	this.btnMenos2.name = "btnMenos2";
	this.btnMenos2.setTransform(605,591);
	new cjs.ButtonHelper(this.btnMenos2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos2).wait(1));

	// Letrero
	this.instance_6 = new lib.cpIntrucciones();
	this.instance_6.setTransform(508.3,35.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// btnMas
	this.btnMas2 = new lib.btnMas2();
	this.btnMas2.name = "btnMas2";
	this.btnMas2.setTransform(519,591);
	new cjs.ButtonHelper(this.btnMas2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas2).wait(1));

	// btnPlay
	this.btnPlay2 = new lib.btnPlay2();
	this.btnPlay2.name = "btnPlay2";
	this.btnPlay2.setTransform(438,591);
	new cjs.ButtonHelper(this.btnPlay2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay2).wait(1));

	// btnStop
	this.btnStop2 = new lib.btnStop2();
	this.btnStop2.name = "btnStop2";
	this.btnStop2.setTransform(361,591);
	new cjs.ButtonHelper(this.btnStop2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop2).wait(1));

	// Titulo
	this.instance_7 = new lib.fondoEscenario2();
	this.instance_7.setTransform(0,0,0.7385,0.6362);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(-0.7,0,960.7,640), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.cpEscenario2());	
			}
		
		var sonido = new createjs.Sound.play("audioMp3", {loop: -1});
		
		function detenerSonido(){
			sonido.stop();
			}
		
		function iniciarSonido(){
		sonido.play();	
			}
		
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnPlay.addEventListener("click", iniciarSonido);
		this.btnSiguiente1.addEventListener("click", detenerSonido);
		
		// Volumen
		
		sonido.volume = 0.5;
		
		function masVolumen(){
		 if(sonido.volume < 1){ sonido.volume+=0.1;};	
			}
		
		function menosVolumen(){
		 if(sonido.volume > 0){ sonido.volume-=0.1;};	
			}
		
		this.btnMas.addEventListener("click", masVolumen);
		this.btnMenos.addEventListener("click", menosVolumen);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMenos
	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(275,570);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos).wait(1));

	// btnMas
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(201,570);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(130,570);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// siguiente
	this.btnSiguiente1 = new lib.btnSiguiente();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(810.8,575.6);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2, false, new lib.btnSiguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));

	// Titulo
	this.instance = new lib.cpTitulo();
	this.instance.setTransform(483.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(58,570);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// Fondo
	this.instance_1 = new lib.fondoEscenario1();
	this.instance_1.setTransform(0,0,0.1731,0.1598);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(0,0,960,640), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario=new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'AE8A96029B071D4C809117F4124C51F0',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fondoEscenario1.jpg?1743012771410", id:"fondoEscenario1"},
		{src:"images/index_atlas_1.png?1743012771342", id:"index_atlas_1"},
		{src:"sounds/Burro_1.mp3?1743012771410", id:"Burro_1"},
		{src:"sounds/Caballo.mp3?1743012771410", id:"Caballo"},
		{src:"sounds/audioMp3.mp3?1743012771410", id:"audioMp3"},
		{src:"sounds/audio2Mp3.mp3?1743012771410", id:"audio2Mp3"},
		{src:"sounds/Gallo.mp3?1743012771410", id:"Gallo"},
		{src:"sounds/Marrano.mp3?1743012771410", id:"Marrano"},
		{src:"sounds/Oveja.mp3?1743012771410", id:"Oveja"},
		{src:"sounds/Vaca.mp3?1743012771410", id:"Vaca"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AE8A96029B071D4C809117F4124C51F0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;