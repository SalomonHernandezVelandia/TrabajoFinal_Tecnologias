<?php
require "conexion.php";
// Obtiene los datos enviados en formato JSON
$data = json_decode(file_get_contents('php://input'), true);

// Extrae los valores del nombre y el apellido
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$area = $data['area'];
$correo = $data['correo'];
$password = $data['password'];

$resultadoBD = mysqli_query($conexion, "INSERT into registro values('$nombre', '$apellido', '$area', '$correo', '$password')"); // Manda los datos a la base de datos
$response = "Nombre: $nombre  Apellido: $apellido";
echo $response;
mysqli_close($conexion); // Cierra la conexión a la base de datos
echo "Los datos se debieron insertar correctamente.";

// Puedes realizar alguna lógica adicional con los valores recibidos
// En este caso, simplemente se devuelve una cadena con los valores

// Devuelve la respuesta al cliente (JavaScript)

?>