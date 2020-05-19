<?php
$host='localhost';
$user= 'root';
$pass ='';
$db ='trs';

$con=  mysqli_connect($host, $user, $pass, $db);
if($con)
    echo 'con';
$value = $_POST['name'];
$value2 = $_POST['email'];
$value3 = $_POST['number'];
$value4 = $_POST['message'];
$sql= "insert into message (name,email,number,message)VALUES ('$value','$value2','$value3','$value4')";
$query= mysqli_query($con,$sql);
    if($query) {
        echo 'ins';
   }
   header('Location:  contact.html');

mysql_close();

?>