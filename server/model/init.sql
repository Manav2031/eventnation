create database eventDB;

\c eventDB;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(255),
    full_name VARCHAR(100),
    phone VARCHAR(13),
    registration_date TIMESTAMP
);

CREATE TABLE user_token(
    id BIGSERIAL PRIMARY KEY,
    fk_user INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255)
);




CREATE TABLE events (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
	date date,
    details VARCHAR(255),
    location VARCHAR(255),
    ticket_price INTEGER,
    available_tickets INTEGER,
    created_by INTEGER REFERENCES users(id),
    total_collection INTEGER
);

CREATE TABLE tickets (
    id BIGSERIAL PRIMARY KEY,
    fk_event INTEGER REFERENCES events(id) ON DELETE CASCADE,
    fk_user INTEGER REFERENCES users(id) ON DELETE CASCADE,
    num INTEGER,
    tot_price INTEGER,
    payment_status BOOLEAN
);

