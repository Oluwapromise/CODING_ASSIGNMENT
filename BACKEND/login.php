<?php
session_start();

// Simulated user credentials (hashed password for "password123")
$users = [
    "admin" => password_hash("password123", PASSWORD_DEFAULT),
    "user" => password_hash("securepass", PASSWORD_DEFAULT)
];

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"] ?? '');
    $password = trim($_POST["password"] ?? '');

    if (isset($users[$username]) && password_verify($password, $users[$username])) {
        $_SESSION["user"] = $username;
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}
?>
