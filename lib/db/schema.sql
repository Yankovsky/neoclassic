BEGIN;

DROP TABLE IF EXISTS slides;
CREATE TABLE slides (
    id SERIAL PRIMARY KEY,
    html TEXT NOT NULL,
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
CREATE INDEX videos_position_index ON videos(position);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    provider VARCHAR NOT NULL,
    hashed_password VARCHAR NOT NULL,
    salt VARCHAR NOT NULL
);
DROP INDEX IF EXISTS users_lower_email_unique;
CREATE UNIQUE INDEX users_lower_email_unique ON users(LOWER(email));

DROP TABLE IF EXISTS entries;
CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    url_slug VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT NOT NULL,
    keywords TEXT NOT NULL,
    html TEXT NOT NULL,
    short_text TEXT,
    datetime TIMESTAMP,
    thumbnail_url VARCHAR,
    type VARCHAR NOT NULL
);
DROP INDEX IF EXISTS entries_lower_url_slug_and_type_unique;
CREATE UNIQUE INDEX entries_lower_url_slug_and_type_unique ON entries(LOWER(url_slug), type);
DROP INDEX IF EXISTS entries_type;
CREATE INDEX entries_type ON entries(type);

DROP TABLE IF EXISTS replies;
CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

DROP TABLE IF EXISTS seo;
CREATE TABLE seo (
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

COMMIT;