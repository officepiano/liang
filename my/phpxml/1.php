<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title></title>

</head>
<body>
<?php
	$xmlarr = simplexml_load_file( "data.xml" ); // 载入 XML 文件  

	foreach ($xmlarr as $key  => $value){
		echo $value -> name;
		echo $value -> age;
	}
?>

</body>
</html>