DROP DATABASE IF EXISTS safefamily;
CREATE DATABASE safefamily;

\c safefamily;

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR,
    firstname VARCHAR,
    lastname VARCHAR,
    password_digest VARCHAR,
    age VARCHAR,
    email VARCHAR UNIQUE,    
    phone VARCHAR UNIQUE,
    group_id INTEGER REFERENCES groups(id),
    lastLong DECIMAL,
    lastLat DECIMAL
);
INSERT INTO groups (id) VALUES (1);
INSERT INTO groups (id) VALUES (2);

INSERT INTO users (firstname, username, lastname, password_digest, age, email, phone, lastLong, lastLat, group_id)
  VALUES ('Alex', 'user1 ', 'Long', 'password', '18', 'testing@gmail.com', '(718) 123-1234', '40.731166', '-73.951434', 1);

INSERT INTO users (firstname, username, lastname, password_digest, age, email, phone, lastLong, lastLat, group_id)
  VALUES ('Bob', 'user2', 'Smith', 'password', '10', 'testing1@gmail.com', '(347) 321-5432', '40.7429595', '-73.9441155', 1);
