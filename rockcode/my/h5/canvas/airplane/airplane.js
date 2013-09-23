var cvs = document.getElementById('sky'),
	ctx = cvs.getContext('2d');

var sky = {
	clear : function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	},
	draw : function(opt){
		new Airplane(opt);		
	},
	setColor : function(color){
		ctx.fillStyle = color;
	}
}

var Airplane = function(opt){
	this.opt = opt;
	this.init();
}
Airplane.prototype = {
	init : function(){
		this._setColor(this.opt.color);
		this.move();
	},
	move : function(){
		var me = this;
		me._clear();
		me.opt.x += 1;
		me.opt.y += 1;
		me._move();
		setTimeout(function(){
			me.move();
			
		},33);
	},
	_move : function(opt){
		ctx.fillRect(this.opt.x,this.opt.y,10,10);
	},
	_clear : function(){
		var me = this;
		ctx.clearRect(me.opt.x,  this.opt.y ,10,10);
	},
	_setColor : function(color){
		ctx.fillStyle = color;
	}
}