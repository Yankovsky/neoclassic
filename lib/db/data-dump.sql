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
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('events_id_seq', 1, false);


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('news_id_seq', 1, false);


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO pages (id, name, text, top_image_url, right_image_url) VALUES (1, 'about', 'Друзья, я с радостью представляю вам мой сольный проект «NeoClassic» – "Новая Классика Дмитрия Янковского".

«NeoClassic» – это мой взгляд на то, как должен развиваться современный мир музыки в России. «NeoClassic» соединяет в себе различные и, казалось бы, несовместимые направления в музыке: оперу, поп-музыку, рок, битбокс, рэп и некоторые другие. Я не хочу ограничивать публику и себя рамками одного стиля. Я люблю красивую музыку, и не важно, кем и когда она была написана. Как исполнитель я хочу донести до вас то, что вы, возможно, до этого не замечали или отвергали в музыке, но, услышав иное звучание, вы поймете, полюбите и откроете для себя новую музыку - мою «Новую Классику».

Проект Дмитрия Янковского «NeoClassic» - удивительно гармоничный синтез классической, поп, рок музыки, других современных музыкальных направлений и академического вокала,  не оставляющий никого равнодушным! Вы станете свидетелем уникального эксперимента и окунетесь в атмосферу невероятно-завораживающего перформанса, так идеально соединяющего, казалось бы,  противоборствующие стили музыкального искусства.

Подобный стиль исполнения - Classicalcrossover - уже завоевал признание за рубежом, войдя в список номинаций музыкальной премии Grammy, ежегодно присуждаемой Национальной академией звукозаписи США. В этом жанре работают такие звезды как : Андреа Бочелли, Алессандро Сафина, группа «Il divo» и другие. В нашей стране это направление еще только развивается и Дмитрий Янковский- один из первых исполнителей, работающих в этом стиле в России.

Дмитрий Янковский - оперный и эстрадный певец, актер, солист театра «Геликон опера», исполнитель главных ролей в мюзиклах «MAMMA MIA!» и «Красавица и чудовище» компании «Stage Entertainment», солист музыкального проекта «Новые голоса», вместе с которым выступает на главных концертных площадках страны (Международный «Дом Музыки», Государственный концертный зал «Кремлёвский Дворец», Дом Правительства РФ (Белый Дом), «Президент отель». Управление делами Президента , «Crocus City Hall»).

Дмитрий много гастролирует по России и за рубежом. Имеет награду «За высокое исполнительское мастерство и профессионализм» (2013) от Профсоюзного комитета Администрации Президента РФ. Выдвинут  кандидатом в «Книгу рекордов Гиннеса» как человек, исполняющий 5 главных ролей в одном спектакле Компанией «Stage Entertainment», обладатель премий СТД, лауреат международный конкурсов.

Родной город Дмитрия – Санкт-Петербург. В 2008г. окончил СПбГАТИ по специальности актер музыкального театра, мастерская нар.арт.РФ А.В.Петрова. Женат, воспитывает двое детей.', 'https://s3-eu-west-1.amazonaws.com/neoclassic/logo-big.jpg', 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg');
INSERT INTO pages (id, name, text, top_image_url, right_image_url) VALUES (2, 'biography', 'ПЫЩ ПЫЩ ОЛОЛО', 'https://s3-eu-west-1.amazonaws.com/neoclassic/logo-big.jpg', 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg');


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('pages_id_seq', 2, true);


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

INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (4, '"Лишь о тебе мечтая" cover by Dmitriy Yankovskiy', 'wsNO9PJYFeo', 'https://i1.ytimg.com/vi/wsNO9PJYFeo/mqdefault.jpg', 4);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (5, 'Eurythmics - "Sweet Dreams" cover by Dmitriy Yankovskiy', 'Alehe8AV0Vk', 'https://i1.ytimg.com/vi/Alehe8AV0Vk/mqdefault.jpg', 5);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (8, '"Parlami d''amore Mariù" cover by Dmitriy Yankovskiy', 'LXk_xlu7gTk', 'https://i1.ytimg.com/vi/LXk_xlu7gTk/mqdefault.jpg', 8);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (1, 'Иванушки International - "Тучи" cover by Dmitriy Yankovskiy', '-nxfoM5gupQ', 'https://i1.ytimg.com/vi/-nxfoM5gupQ/mqdefault.jpg', 0);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (2, '"The Show Must Go On" cover by Dmitriy Yankovskiy', 'sv8nOpisB9s', 'https://i1.ytimg.com/vi/sv8nOpisB9s/mqdefault.jpg', 1);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (3, 'System Of A Down - Toxicity cover by Dmitriy Yankovskiy', 'w3WxP-SeQ7M', 'https://i1.ytimg.com/vi/w3WxP-SeQ7M/mqdefault.jpg', 2);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (6, 'MAMMA MIA! - cover by Dmitriy Yankovskiy', '9e62_jv61JQ', 'https://i1.ytimg.com/vi/9e62_jv61JQ/mqdefault.jpg', 7);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (7, '"Let It Be" cover by Dmitriy Yankovskiy', 'C9NIch3DhxY', 'https://i1.ytimg.com/vi/C9NIch3DhxY/mqdefault.jpg', 6);
INSERT INTO videos (id, title, video_id, thumbnail_url, "position") VALUES (9, '"Somebody That I Used To Know" cover by Dmitriy Yankovskiy', 'zscl0-RzPlI', 'https://i1.ytimg.com/vi/zscl0-RzPlI/mqdefault.jpg', 3);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('videos_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

