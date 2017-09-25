<?php
$_uname = $_POST['uname'];
$_upwd = $_POST['upwd'];
$_type = $_POST['type'];

define('HOST',"127.0.0.1");
define('DB_USER','root');
define('DB_PWD','cao12233');
define('DB_PORT','3306');
define('DB_NAME','caocao');

$_link = new mysqli(HOST,DB_USER,DB_PWD,DB_NAME,DB_PORT);

$_link->set_charset('utf8');

if($_type === 'login'){
	$_sql = 'SELECT upwd from user WHERE uname = "'.$_uname.'"';
	
	$_res = $_link->query($_sql);
	$_r = $_res->fetch_row();
	if($_r[0] === $_upwd){
		echo "success";
	}else{
		echo "error";
	}
}else{
	$_sql = 'INSERT into user (uname,upwd) value("'.$_uname.'","'.$_upwd.'")';
	$_res = $_link->query($_sql);
	$_r = $_link->affected_rows;
	if($_r == 1){
		echo "success";
	}else{
		echo "error";
	}
}
?>