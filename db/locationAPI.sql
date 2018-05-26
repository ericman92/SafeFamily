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
    fname VARCHAR,
    lname VARCHAR,
    password_digest VARCHAR,
    age VARCHAR,
    email VARCHAR UNIQUE,    
    phone VARCHAR UNIQUE,
    group_id INTEGER REFERENCES groups(id),
    lastLong DECIMAL,
    lastLat DECIMAL
);

INSERT INTO users (fname, username, lname, password_digest, age, email, phone, lastLong, lastLat)
  VALUES ('Alex', 'ericman', 'Long', 'password', '18', 'testing@gmail.com', '(718) 123-1234', '40.7429595', '-73.9441155');

INSERT INTO users (fname, username, lname, password_digest, age, email, phone, lastLong, lastLat)
  VALUES ('Bob', 'ericman1', 'Smith', 'password', '10', 'testing1@gmail.com', '(347) 321-5432', '40.7429595', '-73.9441155');
