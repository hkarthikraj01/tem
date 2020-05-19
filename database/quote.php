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
$value3 = $_POST['need'];
$value4 = $_POST['number'];
$value5 = $_POST['q1'];
$value6 = $_POST['q2'];
$value7 = $_POST['q3'];
$value8 = $_POST['q4'];
$value9 = $_POST['q5'];
$value10 = $_POST['q6'];
$value11 = $_POST['q7'];
$value12 = $_POST['q8'];
$sql= "insert into quote (name,email,need,number,q1,q2,q3,q4,q5,q6,q7,q8)VALUES ('$value','$value2','$value3','$value4','$value5','$value6','$value7','$value8','$value9','$value10','$value11','$value12')";
$query= mysqli_query($con,$sql);
    if($query) {
        echo 'ins';
   }
   header('Location:  quote.html');

mysql_close();

?>