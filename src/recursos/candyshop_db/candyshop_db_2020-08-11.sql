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
  `top_check` tinyint(1) DEFAULT 0,
  `offer_check` tinyint(1) DEFAULT 0,
  `offer_discount` int(10) DEFAULT NULL,
  `price` int(10) unsigned DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT 'no-image.jpg',
  `category` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,NULL,'2020-08-11 08:32:30','Carga de prueba','',1,0,10,10000,'no-image.jpg','Caramelos',1),(2,NULL,NULL,'milka mouse','Alfajor milka mouse',0,0,10,200,'no-image.jpg','Alfajor',1),(3,NULL,NULL,'milka mouse1','Alfajor milka 1',1,1,10,300,'no-image.jpg','Alfajor',1),(4,NULL,NULL,'Alfajor Bagley','Alfajor Bagley blanco triple',1,1,50,80,'AlfajorBagleyBagley.jpg','Alfajor',1),(5,'2020-08-10 00:50:54','2020-08-10 00:50:54','Paraguita chocolate','Paraguita chocolate felfort',0,0,10,50,'Paraguitachocolate.jpg','Chocolates',0),(6,'2020-08-10 00:52:43','2020-08-10 00:52:43','Saladix pizza','Saladix caja sabor pizza',0,0,20,150,'Saladixpizza.jpg','Galletitas',1),(7,'2020-08-10 00:53:26','2020-08-10 00:53:26','Saladix pizza 2','prueba saladix 2',1,1,20,120,'Saladixpizza2.jpg','Galletitas',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'2020-08-09 23:05:33','tomas@consek.com.ar','$2b$10$wf5i0Eshrw8QvfL0l6fl5ufJhKNvBcH2OHYN1WBo.X67malsdAuD6','',NULL,NULL,NULL,'','ConseK','','','','tomas@consek.com.ar.jpg',1,1),(2,NULL,NULL,'juanespinel@gmail.com','$2b$10$6/7cIv1J/MllFRxXs5mVbO/FHbkoF.B1ekXL6j5AvCySenUaXhHji',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'juanespinel@gmail.com.jpg',1,1),(3,NULL,NULL,'mica.lew@hotmail.com','$2b$10$2v7/ILfkXuxeCCJI8bb5m.OOv0hC2vMuXfLauk/YVrNmZ9oOh2roi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'mica.lew@hotmail.com.png',1,1),(6,'2020-08-07 08:17:10','2020-08-09 08:10:26','jtomaschiesa@gmail.com','$2b$10$BdUZOtappRaZVc6XoCT9LuWAIlRGPnOUjN9Gi4RHlz06DlhZZeLBK','Buenos Aires 3653',NULL,NULL,NULL,'1130197729','ConseK','JOSE TOMAS CHIESA','20315766045','MONOTRIBUTISTA','jtomaschiesa@gmail.com.jpg',1,1),(9,'2020-08-07 08:47:04','2020-08-07 08:47:04','lala@lala.com','$2b$10$uKOdnja5iPAroZdTfnaKduONIJxFqoqNlOnlgnj3iMoydzhXjpwVK','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','lala@lala.com.jpg',1,1),(10,'2020-08-07 08:48:08','2020-08-07 08:48:08','la@lala.com','$2b$10$T3Fyt613pFXT72MY8ZtVAewUUTMcduOC98dwZR/wINccMdNdE4aBy','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','la@lala.com.jpg',1,1),(11,'2020-08-07 08:49:33','2020-08-07 08:49:33','la@la.com.ar','$2b$10$D3yQ5FTuCZPC8XNm/q0VXu4UVqvKU064flENy9GVnndWEAHYUanA6','buenos aires 3653',NULL,NULL,NULL,'5491130197729',NULL,'JOSE TOMAS CHIESA','31576604','monotributista','la@la.com.ar.jpg',1,1),(12,'2020-08-07 08:53:16','2020-08-07 08:53:16','cacho@lala.com','$2b$10$13Jjb6S00OAlEiVJ3FDS0umbKAjGLhozxkqV3uNkSqdS/YNH8gX7q','buenos aires 3653',NULL,NULL,NULL,'1130197729',NULL,'JOSE TOMAS CHIESA','2147483647','monotributista','cacho@lala.com.jpg',1,1),(13,'2020-08-07 08:55:40','2020-08-07 08:55:40','constring@lala.com','$2b$10$zUS1cOnc.6PHDkCLvdKbK.14U0GqbHQbLSxHR0hg3vncjTgvw9iPa','buenos aires 3653',NULL,NULL,NULL,'11301977298',NULL,'JOSE TOMAS CHIESA','20315766045','monotributista','constring@lala.com.jpg',1,1),(15,'2020-08-07 08:58:17','2020-08-09 10:13:04','jtomaschiesa@gmail.com.ar','$2b$10$m.F5SJUe7cfUcxtkdYG/h.LHxQTG5gxcW4nFckF3OjAYcDIrLhx8y','buenos aires 3653',NULL,NULL,NULL,'1130197729','ConseK','JOSE TOMAS CHIESA','20315766045','monotributista','jtomaschiesa@gmail.com.ar8.jpg',1,1),(16,'2020-08-09 07:21:07','2020-08-09 09:13:31','tomas@consek.com.br','$2b$10$yOjous2J5qnT1BqJydfQsOvDGUWFj2VOhaNkxqAZ.gecieVLY7xv.','Buenos Aires 3653',NULL,NULL,NULL,'1130197729','CosneK','JOSE TOMAS CHIESA','20315766045','Monotributista','tomas@consek.com.br.jpg',1,1),(17,'2020-08-09 07:59:01','2020-08-09 10:12:40','tomas@consek.com.ara','$2b$10$dKcQBizONKnsm3Nik9DORu77xd9yYd1CpScAFZXf/u/G7BsoLfYMK','BUENOS AIRES 3653, CIUDADELA, 1702',NULL,NULL,NULL,'1130197729','CONSEK','JOSE TOMAS CHIESA','315766045','MONOTRIBUTISTA','tomas@consek.com.ara.jpg',1,1),(18,'2020-08-09 23:07:59','2020-08-09 23:10:02','pepe@pepino.com','$2b$10$iAW0YFuRF4xI6ih7O0NZRubsU75jcPWKgNo/MenK7VLN49l6WhpD6','pepe 123',NULL,NULL,NULL,'1234567890','pepino','pepe sa','3033333333','INSCRIPTO','pepe@pepino.com.jpg',0,0);
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

-- Dump completed on 2020-08-11  5:53:39
