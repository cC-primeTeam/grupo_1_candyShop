CREATE DATABASE  IF NOT EXISTS `candyshop_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `candyshop_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: candyshop_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories_products`
--

DROP TABLE IF EXISTS `categories_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_products`
--

LOCK TABLES `categories_products` WRITE;
/*!40000 ALTER TABLE `categories_products` DISABLE KEYS */;
INSERT INTO `categories_products` VALUES (1,NULL,NULL,'ALFAJOR');
/*!40000 ALTER TABLE `categories_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_products`
--

DROP TABLE IF EXISTS `images_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `products_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `candy_idx` (`products_id`),
  KEY `prueba_idx` (`products_id`),
  CONSTRAINT `images_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_products`
--

LOCK TABLES `images_products` WRITE;
/*!40000 ALTER TABLE `images_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `images_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prices` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cost` int(10) DEFAULT NULL,
  `utility` int(10) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `products_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prices_products_id_foreign_idx` (`products_id`),
  CONSTRAINT `prices_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `top_check` tinyint(1) unsigned NOT NULL,
  `oferta_check` tinyint(1) unsigned NOT NULL,
  `oferta_descuento` int(10) DEFAULT NULL,
  `oferta_precio` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prueba_idx` (`category_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories_products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,NULL,NULL,'prueba','prueba',NULL,123,123,123,123);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `adress` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL,
  `telephone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_fantasy` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `business_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cuit` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fiscal_condition` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,'tomas@consek.com.ar','$2b$10$wf5i0Eshrw8QvfL0l6fl5ufJhKNvBcH2OHYN1WBo.X67malsdAuD6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'tomas@consek.com.ar.jpg',1,1),(2,NULL,NULL,'juanespinel@gmail.com','$2b$10$6/7cIv1J/MllFRxXs5mVbO/FHbkoF.B1ekXL6j5AvCySenUaXhHji',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'juanespinel@gmail.com.jpg',1,1),(3,NULL,NULL,'mica.lew@hotmail.com','$2b$10$2v7/ILfkXuxeCCJI8bb5m.OOv0hC2vMuXfLauk/YVrNmZ9oOh2roi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'mica.lew@hotmail.com.png',1,1),(6,'2020-08-07 08:17:10','2020-08-09 08:10:26','jtomaschiesa@gmail.com','$2b$10$BdUZOtappRaZVc6XoCT9LuWAIlRGPnOUjN9Gi4RHlz06DlhZZeLBK','Buenos Aires 3653',NULL,NULL,NULL,'1130197729','ConseK','JOSE TOMAS CHIESA','20315766045','MONOTRIBUTISTA','jtomaschiesa@gmail.com.jpg',1,1),(9,'2020-08-07 08:47:04','2020-08-07 08:47:04','lala@lala.com','$2b$10$uKOdnja5iPAroZdTfnaKduONIJxFqoqNlOnlgnj3iMoydzhXjpwVK','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','lala@lala.com.jpg',1,1),(10,'2020-08-07 08:48:08','2020-08-07 08:48:08','la@lala.com','$2b$10$T3Fyt613pFXT72MY8ZtVAewUUTMcduOC98dwZR/wINccMdNdE4aBy','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','la@lala.com.jpg',1,1),(11,'2020-08-07 08:49:33','2020-08-07 08:49:33','la@la.com.ar','$2b$10$D3yQ5FTuCZPC8XNm/q0VXu4UVqvKU064flENy9GVnndWEAHYUanA6','buenos aires 3653',NULL,NULL,NULL,'5491130197729',NULL,'JOSE TOMAS CHIESA','31576604','monotributista','la@la.com.ar.jpg',1,1),(12,'2020-08-07 08:53:16','2020-08-07 08:53:16','cacho@lala.com','$2b$10$13Jjb6S00OAlEiVJ3FDS0umbKAjGLhozxkqV3uNkSqdS/YNH8gX7q','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','cacho@lala.com.jpg',1,1),(13,'2020-08-07 08:55:40','2020-08-07 08:55:40','constring@lala.com','$2b$10$zUS1cOnc.6PHDkCLvdKbK.14U0GqbHQbLSxHR0hg3vncjTgvw9iPa','buenos aires 3653',NULL,NULL,NULL,'11301977298',NULL,'JOSE TOMAS CHIESA','20315766045','monotributista','constring@lala.com.jpg',1,1),(15,'2020-08-07 08:58:17','2020-08-09 10:13:04','jtomaschiesa@gmail.com.ar','$2b$10$m.F5SJUe7cfUcxtkdYG/h.LHxQTG5gxcW4nFckF3OjAYcDIrLhx8y','buenos aires 3653',NULL,NULL,NULL,'1130197729','ConseK','JOSE TOMAS CHIESA','20315766045','monotributista','jtomaschiesa@gmail.com.ar8.jpg',1,1),(16,'2020-08-09 07:21:07','2020-08-09 09:13:31','tomas@consek.com.br','$2b$10$yOjous2J5qnT1BqJydfQsOvDGUWFj2VOhaNkxqAZ.gecieVLY7xv.','Buenos Aires 3653',NULL,NULL,NULL,'1130197729','CosneK','JOSE TOMAS CHIESA','20315766045','Monotributista','tomas@consek.com.br.jpg',1,1),(17,'2020-08-09 07:59:01','2020-08-09 10:12:40','tomas@consek.com.ara','$2b$10$dKcQBizONKnsm3Nik9DORu77xd9yYd1CpScAFZXf/u/G7BsoLfYMK','BUENOS AIRES 3653, CIUDADELA, 1702',NULL,NULL,NULL,'1130197729','CONSEK','JOSE TOMAS CHIESA','315766045','MONOTRIBUTISTA','tomas@consek.com.ara.jpg',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-09  7:29:13
