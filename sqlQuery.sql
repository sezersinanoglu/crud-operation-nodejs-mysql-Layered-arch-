

--CREATE DATABASE QUERY
create database tutorial

--CREATE TABLE QUERY
CREATE TABLE `tutorial`.`tutorials` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `published` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

