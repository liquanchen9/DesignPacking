(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 180,
	height: 435,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"impublic/pc/images/work/leftmenu/four.png", id:"four"},
		{src:"impublic/pc/images/work/leftmenu/menu1.png", id:"menu1"},
		{src:"impublic/pc/images/work/leftmenu/menu2.png", id:"menu2"},
		{src:"impublic/pc/images/work/leftmenu/menu3.png", id:"menu3"},
		{src:"impublic/pc/images/work/leftmenu/menu4.png", id:"menu4"},
		{src:"impublic/pc/images/work/leftmenu/menubg.png", id:"menubg"},
		{src:"impublic/pc/images/work/leftmenu/one.png", id:"one"},
		{src:"impublic/pc/images/work/leftmenu/three.png", id:"three"},
		{src:"impublic/pc/images/work/leftmenu/two.png", id:"two"}
	]
};



// symbols:



(lib.four = function() {
	this.initialize(img.four);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,33);


(lib.menu1 = function() {
	this.initialize(img.menu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.menu2 = function() {
	this.initialize(img.menu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.menu3 = function() {
	this.initialize(img.menu3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.menu4 = function() {
	this.initialize(img.menu4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.menubg = function() {
	this.initialize(img.menubg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.one = function() {
	this.initialize(img.one);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,33);


(lib.three = function() {
	this.initialize(img.three);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,33);


(lib.two = function() {
	this.initialize(img.two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,33);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.one();
	this.instance.setTransform(-14.5,-17.5);

	this.instance_1 = new lib.two();
	this.instance_1.setTransform(-15,-18.5);

	this.instance_2 = new lib.three();
	this.instance_2.setTransform(-14.7,-18);

	this.instance_3 = new lib.four();
	this.instance_3.setTransform(-17,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.menubg();
	this.instance_4.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E4289").s().p("AnQHVIAAuqIOgAAIAAOqg");
	this.shape.setTransform(46.5,47);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,94);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3("single",3);
	this.instance.setTransform(-47.5,-1.3,0.363,1,0,0,-14.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({scaleX:1,skewY:0,x:-38.2,y:0},0).to({x:-0.2},4,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("Ag7mVQBWgjAtDbQAuDbgsDEQgsDGh8ATg");
	this.shape.setTransform(-38.7,-4.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.menu4();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_1.setTransform(-0.5,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_2.setTransform(-24.8,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("Ai1EkQhMh5AAirQAAipBMh5QBLh5BqAAQBrAABLB5QBMB5AACpQAACrhMB5QhLB4hrAAQhqAAhLh4g");
	this.shape_3.setTransform(-45.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA9h5BUAAQBVAAA9B5QA9B5AACpQAACrg9B5Qg9B4hVAAQhUAAg9h4g");
	this.shape_4.setTransform(-46.2,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgOAAQgRAAgWgdg");
	this.shape_5.setTransform(-47.2,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-0.5}}]},1).to({state:[{t:this.shape_1,p:{x:-3.2}}]},1).to({state:[{t:this.shape_1,p:{x:-11.3}}]},1).to({state:[{t:this.shape_2,p:{x:-24.8}}]},1).to({state:[{t:this.shape_2,p:{x:-43.7}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3("single",3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38},4,cjs.Ease.get(-0.81)).wait(1).to({scaleX:0.36,skewY:-14.7,x:42.8,y:-3.6},0).to({_off:true},1).wait(8));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("AhaDFQgwjbBAjVQBAjVB5AuIgeMtIgHAAQh2AAgujWg");
	this.shape.setTransform(34.3,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgPAAQgQAAgWgdg");
	this.shape_1.setTransform(45.8,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(7));

	// Layer 6
	this.instance_1 = new lib.menu4();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA8h5BVAAQBWAAA8B5QA9B5AACpQAACrg9B5Qg8B4hWAAQhVAAg8h4g");
	this.shape_2.setTransform(41.3,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("AjZEkQhch5ABirQgBipBch5QBbh5B+AAQCAAABbB5QBaB5ABCpQgBCrhaB5QhbB4iAAAQh+AAhbh4g");
	this.shape_3.setTransform(41.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_4.setTransform(41.3,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_5.setTransform(23,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},7).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:41.3}}]},1).to({state:[{t:this.shape_5,p:{x:23}}]},1).to({state:[{t:this.shape_5,p:{x:10}}]},1).to({state:[{t:this.shape_4,p:{x:2.1}}]},1).to({state:[{t:this.shape_4,p:{x:-0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3("single",2);
	this.instance.setTransform(-47.5,-1.3,0.363,1,0,0,-14.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({scaleX:1,skewY:0,x:-38.2,y:0},0).to({x:-0.2},4,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("Ag7mVQBWgjAtDbQAuDbgsDEQgsDGh8ATg");
	this.shape.setTransform(-38.7,-4.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.menu3();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_1.setTransform(-0.5,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_2.setTransform(-24.8,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("Ai1EkQhMh5AAirQAAipBMh5QBLh5BqAAQBrAABLB5QBMB5AACpQAACrhMB5QhLB4hrAAQhqAAhLh4g");
	this.shape_3.setTransform(-45.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA9h5BUAAQBVAAA9B5QA9B5AACpQAACrg9B5Qg9B4hVAAQhUAAg9h4g");
	this.shape_4.setTransform(-46.2,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgOAAQgRAAgWgdg");
	this.shape_5.setTransform(-47.2,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-0.5}}]},1).to({state:[{t:this.shape_1,p:{x:-3.2}}]},1).to({state:[{t:this.shape_1,p:{x:-11.3}}]},1).to({state:[{t:this.shape_2,p:{x:-24.8}}]},1).to({state:[{t:this.shape_2,p:{x:-43.7}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3("single",2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38},4,cjs.Ease.get(-0.81)).wait(1).to({scaleX:0.36,skewY:-14.7,x:42.8,y:-3.6},0).to({_off:true},1).wait(8));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("AhaDFQgwjbBAjVQBAjVB5AuIgeMtIgHAAQh2AAgujWg");
	this.shape.setTransform(34.3,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgPAAQgQAAgWgdg");
	this.shape_1.setTransform(45.8,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(7));

	// Layer 2
	this.instance_1 = new lib.menu3();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA8h5BVAAQBWAAA8B5QA9B5AACpQAACrg9B5Qg8B4hWAAQhVAAg8h4g");
	this.shape_2.setTransform(41.3,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("AjZEkQhch5ABirQgBipBch5QBbh5B+AAQCAAABbB5QBaB5ABCpQgBCrhaB5QhbB4iAAAQh+AAhbh4g");
	this.shape_3.setTransform(41.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_4.setTransform(41.3,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_5.setTransform(23,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},7).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:41.3}}]},1).to({state:[{t:this.shape_5,p:{x:23}}]},1).to({state:[{t:this.shape_5,p:{x:10}}]},1).to({state:[{t:this.shape_4,p:{x:2.1}}]},1).to({state:[{t:this.shape_4,p:{x:-0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Symbol3("single",1);
	this.instance.setTransform(-47.5,-1.3,0.363,1,0,0,-14.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({scaleX:1,skewY:0,x:-38.2,y:0},0).to({x:-0.2},4,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("Ag7mVQBWgjAtDbQAuDbgsDEQgsDGh8ATg");
	this.shape.setTransform(-38.7,-4.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.menu2();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_1.setTransform(-0.5,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_2.setTransform(-24.8,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("Ai1EkQhMh5AAirQAAipBMh5QBLh5BqAAQBrAABLB5QBMB5AACpQAACrhMB5QhLB4hrAAQhqAAhLh4g");
	this.shape_3.setTransform(-45.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA9h5BUAAQBVAAA9B5QA9B5AACpQAACrg9B5Qg9B4hVAAQhUAAg9h4g");
	this.shape_4.setTransform(-46.2,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgOAAQgRAAgWgdg");
	this.shape_5.setTransform(-47.2,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-0.5}}]},1).to({state:[{t:this.shape_1,p:{x:-3.2}}]},1).to({state:[{t:this.shape_1,p:{x:-11.3}}]},1).to({state:[{t:this.shape_2,p:{x:-24.8}}]},1).to({state:[{t:this.shape_2,p:{x:-43.7}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3("single",1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38},4,cjs.Ease.get(-0.81)).wait(1).to({scaleX:0.36,skewY:-14.7,x:42.8,y:-3.6},0).to({_off:true},1).wait(8));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("AhaDFQgwjbBAjVQBAjVB5AuIgeMtIgHAAQh2AAgujWg");
	this.shape.setTransform(34.3,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgPAAQgQAAgWgdg");
	this.shape_1.setTransform(45.8,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(7));

	// Layer 5
	this.instance_1 = new lib.menu2();
	this.instance_1.setTransform(-41.7,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA8h5BVAAQBWAAA8B5QA9B5AACpQAACrg9B5Qg8B4hWAAQhVAAg8h4g");
	this.shape_2.setTransform(41.3,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("AjZEkQhch5ABirQgBipBch5QBbh5B+AAQCAAABbB5QBaB5ABCpQgBCrhaB5QhbB4iAAAQh+AAhbh4g");
	this.shape_3.setTransform(41.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_4.setTransform(41.3,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_5.setTransform(23,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},7).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:41.3}}]},1).to({state:[{t:this.shape_5,p:{x:23}}]},1).to({state:[{t:this.shape_5,p:{x:10}}]},1).to({state:[{t:this.shape_4,p:{x:2.1}}]},1).to({state:[{t:this.shape_4,p:{x:-0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84.3,88);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 9
	this.instance = new lib.Symbol3("single",0);
	this.instance.setTransform(-47.5,-1.3,0.363,1,0,0,-14.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({scaleX:1,skewY:0,x:-38.2,y:0},0).to({x:-0.2},4,cjs.Ease.get(1)).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("Ag7mVQBWgjAtDbQAuDbgsDEQgsDGh8ATg");
	this.shape.setTransform(-38.7,-4.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.menu1();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_1.setTransform(-0.5,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_2.setTransform(-24.8,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("Ai1EkQhMh5AAirQAAipBMh5QBLh5BqAAQBrAABLB5QBMB5AACpQAACrhMB5QhLB4hrAAQhqAAhLh4g");
	this.shape_3.setTransform(-45.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA9h5BUAAQBVAAA9B5QA9B5AACpQAACrg9B5Qg9B4hVAAQhUAAg9h4g");
	this.shape_4.setTransform(-46.2,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgOAAQgRAAgWgdg");
	this.shape_5.setTransform(-47.2,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:-0.5}}]},1).to({state:[{t:this.shape_1,p:{x:-3.2}}]},1).to({state:[{t:this.shape_1,p:{x:-11.3}}]},1).to({state:[{t:this.shape_2,p:{x:-24.8}}]},1).to({state:[{t:this.shape_2,p:{x:-43.7}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38},4,cjs.Ease.get(-0.81)).wait(1).to({scaleX:0.36,skewY:-14.7,x:42.8,y:-3.6},0).to({_off:true},1).wait(8));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080404").s().p("AhaDFQgwjbBAjVQBAjVB5AuIgeMtIgHAAQh2AAgujWg");
	this.shape.setTransform(34.3,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080404").s().p("AgqGRIAAsqQAegnAkAnQAmGZgmGRQgNAdgPAAQgQAAgWgdg");
	this.shape_1.setTransform(45.8,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(7));

	// Layer 2
	this.instance_1 = new lib.menu1();
	this.instance_1.setTransform(-42,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080404").s().p("AiREkQg9h5AAirQAAipA9h5QA8h5BVAAQBWAAA8B5QA9B5AACpQAACrg9B5Qg8B4hWAAQhVAAg8h4g");
	this.shape_2.setTransform(41.3,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080404").s().p("AjZEkQhch5ABirQgBipBch5QBbh5B+AAQCAAABbB5QBaB5ABCpQgBCrhaB5QhbB4iAAAQh+AAhbh4g");
	this.shape_3.setTransform(41.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCqAAB5B5QB5B5AACpQAACrh5B5Qh5B4iqAAQipAAh5h4g");
	this.shape_4.setTransform(41.3,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080404").s().p("AkiEkQh5h5AAirQAAipB5h5QB5h5CpAAQCrAAB4B5QB5B5AACpQAACrh5B5Qh4B4irAAQipAAh5h4g");
	this.shape_5.setTransform(23,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},7).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:41.3}}]},1).to({state:[{t:this.shape_5,p:{x:23}}]},1).to({state:[{t:this.shape_5,p:{x:10}}]},1).to({state:[{t:this.shape_4,p:{x:2.1}}]},1).to({state:[{t:this.shape_4,p:{x:-0.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-44,84,88);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.Symbol3("single",3);
	this.instance.setTransform(42,44);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(42,44);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(42,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.Symbol3("single",2);
	this.instance.setTransform(42,44);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(42,44);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(42,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.Symbol3("single",1);
	this.instance.setTransform(42,44);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(42,44);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(42,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.Symbol3("single",0);
	this.instance.setTransform(42,44);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(42,44);

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(42,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,88);


// stage content:
(lib.menu = function() {
	this.initialize();

	// 图层 1
	this.btn4 = new lib.元件5();
	this.btn4.setTransform(89.5,379.5,1,1,0,0,0,46.5,47);
	this.btn4.alpha = 0.012;

	this.btn3 = new lib.元件5();
	this.btn3.setTransform(89.5,270.5,1,1,0,0,0,46.5,47);
	this.btn3.alpha = 0.012;

	this.btn2 = new lib.元件5();
	this.btn2.setTransform(89.5,162,1,1,0,0,0,46.5,47);
	this.btn2.alpha = 0.012;

	this.btn1 = new lib.元件5();
	this.btn1.setTransform(89.5,54,1,1,0,0,0,46.5,47);
	this.btn1.alpha = 0.012;

	// 图层 2
	this.step4 = new lib.元件4();
	this.step4.setTransform(89.5,382.5,1,1,0,0,0,42,44);

	this.step3 = new lib.元件3();
	this.step3.setTransform(89.5,271.5,1,1,0,0,0,42,44);

	this.step2 = new lib.元件2();
	this.step2.setTransform(89.5,163.5,1,1,0,0,0,42,44);

	this.step1 = new lib.元件1();
	this.step1.setTransform(89.5,52.5,1,1,0,0,0,42,44);

	this.addChild(this.step1,this.step2,this.step3,this.step4,this.btn1,this.btn2,this.btn3,this.btn4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(133,224.5,93,419.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;