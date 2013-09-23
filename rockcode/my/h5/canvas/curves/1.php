<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title></title>
<style type="text/css">
*{margin: 0;padding: 0}
html{height: 100%;overflow: hidden;}
body{height: 100%}
canvas{background:#000;}
</style>
</head>
<body>
<div style="margin:20px">
<canvas id="game" width="500" height="500">

</canvas>
</div>

<script type="text/javascript" src="canvas.js"></script>
<script type="text/javascript" >
	$.curves.strokeLine([
		{
			x : 0,
			y : 0
		},
		{
			x : 10,
			y : 20
		},
		{
			x : 20,
			y : 15
		},
		{
			x : 30,
			y : 20
		},
		{
			x : 40,
			y : 50
		},
		{
			x : 60,
			y : 80
		}

	])
	$.curves.fillCircle();
</script>



 
</body>
</html>