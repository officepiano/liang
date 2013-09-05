var $ = {};
var cvs = document.getElementById('game');
var cxt = cvs.getContext('2d');
var h = 500;

$.curves = {
	strokeLine : function(arr){
		
		for(var i = 0 ; i < arr.length; i++){
			if(i == arr.length-1){
				break;
			}
			cxt.strokeStyle="#fff";
			var item = arr[i],
				next = arr[i+1];
			cxt.beginPath();
			cxt.moveTo(item.x,h-item.y);
			cxt.lineTo(next.x,h-next.y);
			cxt.closePath();
			cxt.stroke();
		}
	},
	fillCircle : function(){
		 cxt.fillStyle="#FF0000";
		 cxt.beginPath();
		 cxt.arc(100,100,20,0,Math.PI*2,true); //Math.PI*2是JS计算方法，是圆
		 cxt.closePath();
		 cxt.fill();
	}
}
 