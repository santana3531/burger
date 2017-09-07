create database burgers_db;

use burgers_db;

create table burgers (
id INTEGER(30) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
date timestamp,
PRIMARY KEY(id)
);
