CREATE DATABASE IF NOT EXISTS spare_parts_db;
USE spare_parts_db;

CREATE TABLE IF NOT EXISTS broadcast_notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
