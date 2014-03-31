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
    video_id VARCHAR NOT NULL,
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

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    text TEXT NOT NULL,
    url_slug VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL,
    thumbnail_url VARCHAR NOT NULL,
    datetime TIMESTAMP NOT NULL
);
DROP INDEX IF EXISTS events_datetime_index;
CREATE UNIQUE INDEX events_datetime_index ON events(datetime);

DROP TABLE IF EXISTS news;
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    text TEXT NOT NULL,
    url_slug VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT(NOW())
);
DROP INDEX IF EXISTS news_created_at_index;
CREATE UNIQUE INDEX news_created_at_index ON news(created_at);

COMMIT;