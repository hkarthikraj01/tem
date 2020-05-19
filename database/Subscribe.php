<?php
$host='localhost';
$user= 'root';
$pass ='';
$db ='trs';

$con=  mysqli_connect($host, $user, $pass, $db);
if($con)
    echo 'con';
$value = $_POST['email'];
$sql= "insert into Subscribe (email)VALUES ('$value')";
$query= mysqli_query($con,$sql);
    if($query) {
        echo 'ins';
   }
   header('Location:  contact.html');

mysql_close();

?>