create database burgers_db;

use burgers_db;

create table burgers (
id INTEGER(30) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50),
devoured BOOLEAN,
date timestamp,
PRIMARY KEY(id)
);
