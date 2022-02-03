
create database checkpoint4;
use checkpoint4;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `role` varchar(255)
);

CREATE TABLE `recipe` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `name` varchar(255),
  `description` varchar(255)
);

ALTER TABLE `recipe` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

