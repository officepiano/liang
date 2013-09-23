<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title></title>
<style type="text/css">
*{margin: 0;padding: 0}
html{height: 100%;overflow: hidden;}
body{height: 100%}
canvas{background: #000;}
</style>
</head>
<body>
<canvas id="sky" width="1000" height="500"></canvas>

<script type="text/javascript" src="airplane.js"></script>
<script type="text/javascript">
	sky.draw({
			color : '#c00',
			x : 10,
			y : 100
		});
	sky.draw({
			color : '#c00',
			x : 100,
			y : 0
		});
</script>
</body>
</html>