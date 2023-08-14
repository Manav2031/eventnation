create database eventDB;

use eventDB;

create table events(
    id integer primary key auto_increment,
    name varchar,
    details varchar,
    location varchar,
    price_reg varchar,
    price_silver varchar,
    price_gold varchar,
    num integer
);

create table tickets(
    id integer primary key auto_increment,
    fk_event integer foreign key references events(id),
    num integer,
    tot_price integer,
    booked_by varchar,
    payment_status boolean
);