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
        if($row['password']==$password){  
            if($row['power']==0){  
                echo 1;//普通用户  
            }else{  
                echo 2;//管理员用户  
            }  
        }else{  
            echo 3;//密码错误  
        }  
    }else{  
        echo 4;//用户不存在  
    }  
}else{  
    echo 0;//验证码错误  
}  