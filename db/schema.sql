create database burgerbites_db;

use burgerbites_db;

create table burger (
  id int(11) auto_increment not null,
  burger_name varchar(100) not null,
  restaurant varchar(100) not null,
  devoured boolean default false,
  `date` timestamp,
  primary key (id)
);
