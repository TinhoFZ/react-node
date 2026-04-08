CREATE DATABASE node_react;

USE node_react;

CREATE TABLE users(
id_user INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
type ENUM('common', 'admin') NOT NULL DEFAULT('common')
);

CREATE TABLE action_logs(
id_action INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
action VARCHAR(50) NOT NULL,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);