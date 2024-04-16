DROP DATABASE IF EXISTS raffle;
CREATE DATABASE raffle;

\c raffle;

DROP TABLE IF EXISTS  raffles;

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    created_at TIMESTAMPTZ,
    key VARCHAR(200),
    winner_id VARCHAR(100),
    raffled_on VARCHAR(200)
);


DROP TABLE IF EXISTS  users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone TEXT, 
    raffle_id INTEGER REFERENCES raffles (id),
    created_at TIMESTAMPTZ 
);



DROP TABLE IF EXISTS winner;

CREATE TABLE winner (
    id SERIAL PRIMARY KEY,
    raffle_id INTEGER REFERENCES raffles(id),
    created_at TIMESTAMPTZ,
    winner_id VARCHAR(20)
);
