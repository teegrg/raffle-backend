DROP DATABASE IF EXISTS raffle;
CREATE DATABASE raffle;

\c raffle;

DROP TABLE IS EXISTS  users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone TEXT, 
    registar_date TIMESTAMPTZ
);

CREATE TABLE secretKey (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    key VARCHAR(200)
)

