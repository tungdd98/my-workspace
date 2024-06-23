--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 14.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: tungdd
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "displayName" character varying(255) NOT NULL
);


ALTER TABLE public."Category" OWNER TO tungdd;

--
-- Name: Featured; Type: TABLE; Schema: public; Owner: tungdd
--

CREATE TABLE public."Featured" (
    id text NOT NULL,
    text character varying(255) NOT NULL,
    icon character varying(255) DEFAULT 'stars-02'::character varying NOT NULL
);


ALTER TABLE public."Featured" OWNER TO tungdd;

--
-- Name: Restaurant; Type: TABLE; Schema: public; Owner: tungdd
--

CREATE TABLE public."Restaurant" (
    id text NOT NULL,
    rating numeric(65,30) NOT NULL,
    rating_count numeric(65,30) NOT NULL,
    city character varying(255) NOT NULL,
    "desc" text NOT NULL,
    images text[],
    name character varying(255) NOT NULL,
    price_range character varying(255) NOT NULL,
    "isFavorite" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "featuredId" text NOT NULL,
    "categoryId" text NOT NULL
);


ALTER TABLE public."Restaurant" OWNER TO tungdd;

--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: tungdd
--

COPY public."Category" (id, name, "createdAt", "updatedAt", "displayName") FROM stdin;
clxrcvqqz0000ssul0qtpkn03	YAKITORI	2024-06-23 09:38:06.251	2024-06-23 09:37:52.433	야키토리·꼬치
clxrcywqf0001ssulol6yuwpd	SUSHI	2024-06-23 09:40:33.975	2024-06-23 09:38:07.395	스시·해산물
clxrcywqf0002ssulkuw2zy09	UNAGI	2024-06-23 09:40:33.975	2024-06-23 09:38:16.42	장어
clxrcywqf0003ssulsb6ems71	TEMPURA	2024-06-23 09:40:33.975	2024-06-23 09:38:22.098	덴푸라
clxrcywqf0004ssulcwoy1ydt	TONKATSU	2024-06-23 09:40:33.975	2024-06-23 09:38:27.588	돈카츠·쿠시카츠
clxrcywqf0005ssulge0g8px8	SUKIYAKI	2024-06-23 09:40:33.975	2024-06-23 09:38:35.284	스키야키·샤브샤브
clxrcywqf0006ssulho8ea03f	SOBA	2024-06-23 09:40:33.975	2024-06-23 09:38:40.946	소바·우동
clxrcywqf0007ssulixd1ij0u	RAMEN	2024-06-23 09:40:33.975	2024-06-23 09:38:52.214	라멘·츠케멘
clxrcywqf0008ssuld1gbvgmr	YAKISOBA	2024-06-23 09:40:33.975	2024-06-23 09:38:59.47	야키소바
clxrcywqf0009ssul4pitwua2	OKONOMIYAKI	2024-06-23 09:40:33.975	2024-06-23 09:39:05.635	오코노미야키·타코야키
clxrcywqf000assulbb1egffw	DONBURI	2024-06-23 09:40:33.975	2024-06-23 09:39:12.298	덮밥
clxrcywqf000bssulkorkyey7	ODEN	2024-06-23 09:40:33.975	2024-06-23 09:39:21.481	오뎅
clxrcywqf000cssul2couxs6a	KAISEKI	2024-06-23 09:40:33.975	2024-06-23 09:39:27.815	가이세키·일식
clxrcywqf000dssulrcipzw61	HAMBAGU	2024-06-23 09:40:33.975	2024-06-23 09:39:32.668	함바그·오므라이스
clxrcywqg000essulapsq6g1u	TEPPANYAKI	2024-06-23 09:40:33.975	2024-06-23 09:39:40.48	스테이크·철판요리
clxrcywqg000fssul5rhx8oid	CURRY	2024-06-23 09:40:33.975	2024-06-23 09:39:47.234	카레
clxrcywqg000gssulvcmwszlv	YAKINIKU	2024-06-23 09:40:33.975	2024-06-23 09:39:52.595	야키니쿠·호르몬
clxrcywqg000hssulg4gkolte	NABE	2024-06-23 09:40:33.975	2024-06-23 09:39:59.717	나베
clxrcywqg000issul4x16er1e	CAFE	2024-06-23 09:40:33.975	2024-06-23 09:40:06.118	카페·디저트
clxrcywqg000jssul4yd6x7r4	IZAKAYA	2024-06-23 09:40:33.975	2024-06-23 09:40:11.768	이자카야·바
clxrcywqg000kssulhqruj7zy	OTHER	2024-06-23 09:40:33.975	2024-06-23 09:40:20.167	기타 일본 음식
\.


--
-- Data for Name: Featured; Type: TABLE DATA; Schema: public; Owner: tungdd
--

COPY public."Featured" (id, text, icon) FROM stdin;
clxrd62jj000lssulib60y59c	나카노시마×야키토리 상위 맛집	stars-02
clxrd62jj000mssulonw9s8ot	도쿄의 상위 스시 맛집	stars-02
clxrd62jj000nssuldygfd9gz	교토의 라멘 명소	stars-02
clxrd62jj000ossulr2ggx9x2	나고야 최고의 텐푸라집	stars-02
clxrd62jj000pssulx7cf09uq	후쿠오카 우동 맛집	stars-02
clxrd62jj000qssultd5abf0j	오사카 야키토리 숨은 맛집	stars-02
clxrd62jj000rssulvide7xhk	삿포로 스시 맛집	stars-02
clxrd62jj000sssul5ddyslti	히로시마 라멘 추천	stars-02
clxrd62jj000tssulfql57y73	요코하마 텐푸라 추천	stars-02
clxrd62jj000ussul8wbhg7d6	고베 우동 맛집	stars-02
\.


--
-- Data for Name: Restaurant; Type: TABLE DATA; Schema: public; Owner: tungdd
--

COPY public."Restaurant" (id, rating, rating_count, city, "desc", images, name, price_range, "isFavorite", "createdAt", "updatedAt", "featuredId", "categoryId") FROM stdin;
clxrd86nc000vssulynsw7h7q	4.200000000000000000000000000000	139.000000000000000000000000000000	osaka	최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는	{https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}	카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야	3~5	f	2024-06-23 09:47:46.728	2024-06-23 09:46:25.572	clxrd62jj000lssulib60y59c	clxrcvqqz0000ssul0qtpkn03
\.


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: tungdd
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Featured Featured_pkey; Type: CONSTRAINT; Schema: public; Owner: tungdd
--

ALTER TABLE ONLY public."Featured"
    ADD CONSTRAINT "Featured_pkey" PRIMARY KEY (id);


--
-- Name: Restaurant Restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: tungdd
--

ALTER TABLE ONLY public."Restaurant"
    ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY (id);


--
-- Name: Restaurant Restaurant_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tungdd
--

ALTER TABLE ONLY public."Restaurant"
    ADD CONSTRAINT "Restaurant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Restaurant Restaurant_featuredId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tungdd
--

ALTER TABLE ONLY public."Restaurant"
    ADD CONSTRAINT "Restaurant_featuredId_fkey" FOREIGN KEY ("featuredId") REFERENCES public."Featured"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

