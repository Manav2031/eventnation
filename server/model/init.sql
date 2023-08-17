create database eventDB;

use eventDB;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    details VARCHAR(255),
    location VARCHAR(255),
    price_reg VARCHAR(20),
    price_silver VARCHAR(20),
    price_gold VARCHAR(20),
    num INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(100),
    full_name VARCHAR(100),
    registration_date TIMESTAMP
);


CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    fk_event INTEGER REFERENCES events(id) ON DELETE CASCADE,
    fk_user INTEGER REFERENCES users(id) ON DELETE CASCADE,
    num INTEGER,
    tot_price INTEGER,
    payment_status BOOLEAN
);

