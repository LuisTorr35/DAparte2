<?php
$host = 'localhost';
$user = 'root';
$pass = 'YsoyRebelde01';
$dbanme = 'ventas_pasajes';
$con = new mysqli($host, $user, $pass, $dbanme);
if ($con->connect_error) {
    die("Error de conexión: " . $con->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreCompleto = $_POST['nombreCompleto'];
    $direccion = $_POST['direccion'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $fechaNacimiento = $_POST['fechaNacimiento'];
    $sexo = $_POST['sexo'];
    $temasInteres = isset($_POST['temas']) ? implode(", ", $_POST['temas']) : '';
    $aficiones = isset($_POST['aficiones']) ? implode(", ", $_POST['aficiones']) : '';
    $stmt = $con->prepare("INSERT INTO usuarios (nombre_completo, direccion, correo_electronico, contrasena, fecha_nacimiento, sexo, temas_interes, aficiones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $nombreCompleto, $direccion, $correo, $contrasena, $fechaNacimiento, $sexo, $temasInteres, $aficiones);
    if ($stmt->execute()) {
        $_SESSION['mensaje'] = "Registro exitoso";
        header("Location: index.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $con->close();
}
