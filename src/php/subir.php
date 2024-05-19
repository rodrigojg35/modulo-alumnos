<?php

require_once 'conexion.php';

$conexion = new Conexion();
$con = $conexion->getConexion();

echo "Servidor funcionando";
?>