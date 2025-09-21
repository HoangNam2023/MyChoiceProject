<?php
header("Content-Type: application/json");

// Kết nối CSDL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myChoice";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Lấy dữ liệu POST
$data = json_decode(file_get_contents("php://input"), true);

// Kiểm tra dữ liệu đầu vào
if (!isset($data['id'])) {
    http_response_code(400);
    echo json_encode(["error" => "Thiếu ID để cập nhật"]);
    exit();
}

// Lấy và kiểm tra các field cần thiết
$id = intval($data['id']);
$title = $conn->real_escape_string($data['title'] ?? '');
$artist = $conn->real_escape_string($data['artist'] ?? '');
$album = $conn->real_escape_string($data['album'] ?? '');
$release_year = $conn->real_escape_string($data['release_year'] ?? '');
$created_at = $conn->real_escape_string($data['created_at'] ?? '');
$updated_at = $conn->real_escape_string($data['updated_at'] ?? date('Y-m-d H:i:s'));

// Tạo truy vấn UPDATE
$sql = "UPDATE songs SET 
            title = '$title',
            artist = '$artist',
            album = '$album',
            release_year = '$release_year',
            created_at = '$created_at',
            updated_at = '$updated_at'
        WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Cập nhật thành công"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Lỗi khi cập nhật: " . $conn->error]);
}

$conn->close();
?>
