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

DROP TABLE IF EXISTS pages;
CREATE TABLE pages (
    id SERIAL PRIMARY KEY,
    slug VARCHAR NOT NULL,
    html TEXT NOT NULL,
    title VARCHAR NOT NULL
);
DROP INDEX IF EXISTS pages_lower_slug_unique;
CREATE UNIQUE INDEX pages_lower_slug_unique ON pages(LOWER(slug));

DROP TABLE IF EXISTS news;
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    slug VARCHAR NOT NULL,
    html TEXT NOT NULL,
    title VARCHAR NOT NULL,
    short_text TEXT NOT NULL,
    datetime TIMESTAMP NOT NULL
);
DROP INDEX IF EXISTS news_lower_slug_unique;
CREATE UNIQUE INDEX news_lower_slug_unique ON news(LOWER(slug));
DROP INDEX IF EXISTS news_datetime;
CREATE UNIQUE INDEX news_datetime ON news(datetime);

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    slug VARCHAR NOT NULL,
    html TEXT NOT NULL,
    title VARCHAR NOT NULL,
    short_text TEXT NOT NULL,
    datetime TIMESTAMP NOT NULL,
    thumbnail_url VARCHAR NOT NULL
);
DROP INDEX IF EXISTS events_lower_slug_unique;
CREATE UNIQUE INDEX events_lower_slug_unique ON events(LOWER(slug));
DROP INDEX IF EXISTS events_datetime;
CREATE UNIQUE INDEX events_datetime ON events(datetime);

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
    path VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT NOT NULL,
    keywords TEXT NOT NULL
);
DROP INDEX IF EXISTS seo_lower_path_unique;
CREATE UNIQUE INDEX seo_lower_path_unique ON seo(LOWER(path));

COMMIT;