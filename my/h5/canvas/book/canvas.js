var $ = {};
$.F1 = function(){
	this.cvs = document.getElementById('game');
	this.ctx = this.cvs.getContext('2d');
}
$.F1.prototype = {
	init : function(){
		this.setFullScreen();
		this.setCtxBackground();
		this.setText('click to start');	
		this.ctx.fillStyle = '#fff';
		this.ctx.fillRect(0,0,10,10)
	},
	//set cvs width and height  to  body's width and height
	setFullScreen : function(){
		this.cvs.width = document.body.clientWidth;
		this.cvs.height = document.body.clientHeight;
	},
	//set ctx background and draw a rect
	setCtxBackground : function(){
		this.ctx.fillStyle = '#000000';
		this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height)
	},
	// set text 
	setText : function(t){
		this.ctx.font = 'bold 20px Arial';
		this.ctx.fillStyle = '#fff';
		//measureText () return text's width;
		var text_w = this.ctx.measureText(t);
		//set text's postion is the window's middle
		var x = (this.cvs.width - text_w.width )/2;
		this.ctx.fillText(t , x ,300);
	}
}
