<?php
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myChoice";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $sql = "SELECT * FROM songs WHERE id = $id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $favouriteMusicDetails = $result->fetch_assoc();
        echo json_encode($favouriteMusicDetails);
    } else {
        echo json_encode(array("message" => "No favourite music found with the given ID"));
    }
} else {
    echo json_encode(array("message" => "No ID provided"));
}

$conn->close();
?>