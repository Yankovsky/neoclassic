BEGIN;

DROP TABLE IF EXISTS slides;
CREATE TABLE slides (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    image_url VARCHAR NOT NULL,
    url VARCHAR,
    position INTEGER UNIQUE NOT NULL
);

DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    videoId VARCHAR NOT NULL,
    thumbnail_url VARCHAR NOT NULL,
    position INTEGER NOT NULL
);

DROP INDEX IF EXISTS videos_position_index;
CREATE INDEX videos_position_index ON videos (position);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    provider VARCHAR NOT NULL,
    hashed_password VARCHAR NOT NULL,
    salt VARCHAR NOT NULL
);

DROP INDEX IF EXISTS users_lower_email_unique;
CREATE UNIQUE INDEX users_lower_email_unique ON users (LOWER(email));

COMMIT;