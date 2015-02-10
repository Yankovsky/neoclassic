BEGIN;

CREATE TABLE slides (
    id SERIAL PRIMARY KEY,
    html TEXT NOT NULL,
    image_url VARCHAR NOT NULL,
    url VARCHAR,
    position INTEGER UNIQUE NOT NULL
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    video_id VARCHAR NOT NULL,
    thumbnail_url VARCHAR NOT NULL,
    position INTEGER NOT NULL
);
CREATE INDEX videos_position_index ON videos(position);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    provider VARCHAR NOT NULL,
    hashed_password VARCHAR NOT NULL,
    salt VARCHAR NOT NULL
);
CREATE UNIQUE INDEX users_lower_email_unique ON users(LOWER(email));

CREATE TYPE entry_type AS ENUM ('pages', 'news', 'events', 'posts');

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    slug VARCHAR,
    title VARCHAR NOT NULL,
    html TEXT,
    short_text TEXT,
    datetime TIMESTAMP,
    thumbnail_url VARCHAR,
    type entry_type NOT NULL
);
CREATE UNIQUE INDEX entries_type_and_lower_slug_unique ON entries(type, LOWER(slug)) WHERE slug IS NOT NULL;

CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE seo (
    id SERIAL PRIMARY KEY,
    path VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT NOT NULL,
    keywords TEXT NOT NULL
);
CREATE UNIQUE INDEX seo_lower_path_unique ON seo(LOWER(path));

COMMIT;