<?php
require_once '../db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'] ?? '';

    if (!empty($message)) {
        $stmt = $pdo->prepare("INSERT INTO broadcast_notifications (message) VALUES (?)");
        $stmt->execute([$message]);
        echo json_encode(['status' => 'success', 'message' => 'Notification broadcasted!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Message cannot be empty']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>