<?php 

//mysqli ('servidor','usuario','tabla','');
$conexion = mysqli ('localhost','root','','datos');

$correo=$_POST['email'];
$pass=$_POST['Password'];
$age=$_POST['edad'];
$pack=$_POST['paquetes'];

echo$correo;
echo$pass;
echo$age;
echo$pack;

?>