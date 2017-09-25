<?php  
header("Content-type: text/html; charset=UTF-8");  
session_start();  
$name = $_POST['user_name'];  
$password=$_POST['password'];  
$code=$_POST['code'];  
$con=mysql_connect('localhost','root','');  
if(!$con){  
    die('error:'.mysql_error());  
}  
mysql_select_db('db_name');  
$result=mysql_query("select * from users where user_name='$name'");  
if($_SESSION['verify']==$code){  
    if($row=mysql_fetch_array($result)){  
        echo 1;//用户已存在  
    }else{//注册成功  
        mysql_query("insert into `users` (`user_name`,`password`) values ('$name','$password')");  
        echo 2;  
    }  
}else{  
    echo 0;  
} 