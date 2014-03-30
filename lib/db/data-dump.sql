--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

--
-- Data for Name: slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO slides (id, text, image_url, url, "position") VALUES (1, 'Друзья!  Я с радостью представляю Вам мой сольный проект NeoClassic – «Новая Классика Дмитрия Янковского». NeoClassic соединяет в себе различные и, казалось бы, несовместимые направления в музыке: оперу, поп-музыку, рок, битбокс, рэп и некоторые другие. NeoClassic – это мой взгляд на то, как должен развиваться современный мир музыки в России...', 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg', '/about', 0);
INSERT INTO slides (id, text, image_url, url, "position") VALUES (2, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide2.jpg', '/contacts', 1);


--
-- Name: slides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('slides_id_seq', 2, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO users (id, email, provider, hashed_password, salt) VALUES (1, 'test@test.com', 'local', '6TzffCILt2DK/0xv0543TKieUoxWbXbN7uSnwMmRNP8WOsiTKeMHX302Km1plT/AE0At5dtiCFUcb8aKcHERRw==', 'b1QzR9GkRVIdhz57oAL1+w==');


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 1, true);


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (0, '"Somebody That I Used To Know" cover by Dmitriy Yankovskiy', 'zscl0-RzPlI', 'https://i1.ytimg.com/vi/zscl0-RzPlI/mqdefault.jpg', 0);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (1, 'Иванушки International - "Тучи" cover by Dmitriy Yankovskiy', '-nxfoM5gupQ', 'https://i1.ytimg.com/vi/-nxfoM5gupQ/mqdefault.jpg', 1);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (2, '"The Show Must Go On" cover by Dmitriy Yankovskiy', 'sv8nOpisB9s', 'https://i1.ytimg.com/vi/sv8nOpisB9s/mqdefault.jpg', 2);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (3, 'System Of A Down - Toxicity cover by Dmitriy Yankovskiy', 'w3WxP-SeQ7M', 'https://i1.ytimg.com/vi/w3WxP-SeQ7M/mqdefault.jpg', 3);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (4, '"Лишь о тебе мечтая" cover by Dmitriy Yankovskiy', 'wsNO9PJYFeo', 'https://i1.ytimg.com/vi/wsNO9PJYFeo/mqdefault.jpg', 4);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (5, 'Eurythmics - "Sweet Dreams" cover by Dmitriy Yankovskiy', 'Alehe8AV0Vk', 'https://i1.ytimg.com/vi/Alehe8AV0Vk/mqdefault.jpg', 5);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (6, 'MAMMA MIA! - cover by Dmitriy Yankovskiy', '9e62_jv61JQ', 'https://i1.ytimg.com/vi/9e62_jv61JQ/mqdefault.jpg', 6);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (7, '"Let It Be" cover by Dmitriy Yankovskiy', 'C9NIch3DhxY', 'https://i1.ytimg.com/vi/C9NIch3DhxY/mqdefault.jpg', 7);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (8, '"Parlami d''amore Mariù" cover by Dmitriy Yankovskiy', 'LXk_xlu7gTk', 'https://i1.ytimg.com/vi/LXk_xlu7gTk/mqdefault.jpg', 8);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('videos_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

