<?php
require_once '../db.php';

header('Content-Type: application/json');

$stmt = $pdo->query("SELECT id, message FROM broadcast_notifications ORDER BY created_at DESC LIMIT 1");
$notif = $stmt->fetch();

if ($notif) {
    echo json_encode(['status' => 'success', 'data' => $notif]);
} else {
    echo json_encode(['status' => 'empty']);
}
?>