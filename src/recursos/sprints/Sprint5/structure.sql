CREATE DATABASE  IF NOT EXISTS `candyshop_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ALFAJORES','2020-08-13 13:02:40','2020-08-13 13:02:40'),(2,'CARAMELOS','2020-08-13 13:02:40','2020-08-13 13:02:40'),(3,'CHOCOLATES','2020-08-13 13:02:40','2020-08-13 13:02:40'),(4,'CHUPETINES','2020-08-13 13:02:40','2020-08-13 13:02:40'),(5,'GALLETITAS','2020-08-13 13:02:40','2020-08-13 13:02:40'),(6,'GOMITAS','2020-08-13 13:02:40','2020-08-13 13:02:40');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fiscals_conditions`
--

DROP TABLE IF EXISTS `fiscals_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fiscals_conditions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fiscals_conditions`
--

LOCK TABLES `fiscals_conditions` WRITE;
/*!40000 ALTER TABLE `fiscals_conditions` DISABLE KEYS */;
INSERT INTO `fiscals_conditions` VALUES (1,'CONSUMIDOR FINAL','2020-08-13 13:02:38','2020-08-13 13:02:38'),(2,'IVA Responsable Inscripto','2020-08-13 13:02:38','2020-08-13 13:02:38'),(3,'IVA no Responsable','2020-08-13 13:02:38','2020-08-13 13:02:38'),(4,'IVA exento','2020-08-13 13:02:38','2020-08-13 13:02:38'),(5,'Responsable Monotributo','2020-08-13 13:02:38','2020-08-13 13:02:38'),(6,'Monotributista Social','2020-08-13 13:02:38','2020-08-13 13:02:38');
/*!40000 ALTER TABLE `fiscals_conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `detail` varchar(100) NOT NULL,
  `top_check` tinyint(1) DEFAULT NULL,
  `offer_check` tinyint(1) DEFAULT NULL,
  `offer_discount` int(10) DEFAULT NULL,
  `price` int(10) unsigned NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Chocolate biznike','Bloque Biznikke x 120gr.',1,0,0,80,'ChocolateBiznike.jpg',3,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(2,'Alfajor bagley blanco triple','Alfajor Bagley Blanco 73.5gr X 1 Uni.',1,1,20,80,'Alfajorbagleyblancotriple.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(3,'Alfajor bon o bon','Alfajor Bon O Bon 40gr X 1 Uni.',0,0,0,50,'Alfajorbonobon.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(4,'Caramelos duros pico dulce','Bolsa de caramelos pico dulce duro x 450gr.',1,1,20,400,'Caramelosdurospicodulce.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(5,'Caramelos masticables sugus','Bolsa de Caramelos Sugus masticables x 700gr.',0,1,50,1000,'Caramelosmasticablessugus.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(6,'Chocolate cadbury yogurt frutilla','Chocolate Cadbury Frutilla x27gr, caja x12u.',0,1,30,1000,'Chocolatecadburyyogurtfrutilla.jpg',3,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(7,'Gomitas mogul ositos extreme','Gomitas acido y dulce mogul ositos extreme.',1,0,0,50,'Gomitasmogulositosextreme.jpg',6,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(8,'Gomitas mogul tiburoncitos','Gomitas dulces mogul tiburoncitos.',0,1,10,50,'Gomitasmogultiburoncitos.jpg',6,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(9,'Paraguita de chocolate felfort','Caja de chupetines Paraguita de chocolate felfort.',1,1,20,1200,'Paraguitadechocolatefelfort.jpg',3,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(10,'Galletitas saladix snack pizza','Galletitas saladix snack pizza x100gr, pack 6u.',0,1,15,600,'Galletitassaladixsnackpizza.jpg',5,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(11,'Awesome Rubber Computer','Turkmenistan Customizable Sports matrix Unbranded THX maroon Investment Account European Unit of Acc',0,0,0,178,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(12,'Practical Soft Bike','magenta Consultant Chicken SMTP Chair Designer Lebanese Pound directional Auto Loan Account Borders',0,0,0,816,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(13,'Licensed Metal Tuna','Money Market Account supply-chains Towels Licensed copying Roads Metal Gorgeous Plastic Keyboard har',0,0,0,210,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(14,'Tasty Wooden Bacon','rich repurpose Isle Reduced Alabama feed International Computers Norwegian Krone Computers',0,0,0,444,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(15,'Unbranded Cotton Fish','Supervisor Montana Computers methodologies communities killer even-keeled Consultant Future Auto Loa',0,0,0,676,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(16,'Handcrafted Wooden Mouse','Metal PCI invoice primary Investment Account Tasty relationships background cultivate Supervisor',0,0,0,868,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(17,'Intelligent Frozen Shirt','optical Plastic orchestrate website Rubber global redundant methodical USB repurpose',0,0,0,917,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(18,'Rustic Plastic Salad','multi-state Cordoba Oro Direct tangible Canada cross-platform Cuban Peso Peso Convertible Rubber Bos',0,0,0,275,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(19,'Handmade Cotton Ball','auxiliary Saudi Riyal plum Strategist Meadow driver motivating Intuitive Macao monitor',0,0,0,455,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(20,'Gorgeous Rubber Bacon','Investment Account capability cyan Borders withdrawal Shoes high-level redefine policy invoice',0,0,0,449,'no-image.jpg',1,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(21,'Refined Frozen Table','Liberian Dollar quantifying Pizza Michigan Future Chips green Unbranded Frozen Hat program expedite',0,0,0,316,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(22,'Intelligent Rubber Bacon','Generic Granite Shoes withdrawal Multi-channelled Soft niches eyeballs haptic array mint green Focus',0,0,0,902,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(23,'Fantastic Frozen Cheese','Open-architected core backing up plug-and-play channels Lead sensor maroon matrix dynamic',0,0,0,362,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(24,'Small Wooden Tuna','Accountability calculating programming Egyptian Pound generate Granite frictionless California navig',0,0,0,106,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(25,'Licensed Soft Towels','override PNG pink feed virtual navigate deposit deploy deposit Tuna',0,0,0,39,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(26,'Intelligent Wooden Chicken','Agent Arizona Group array Toys Macao sky blue tan Minnesota Engineer',0,0,0,38,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(27,'Fantastic Steel Bike','infrastructures navigating Hawaii Burkina Faso RAM Internal interface payment green compressing',0,0,0,16,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(28,'Handcrafted Concrete Tuna','value-added Rubber online system Officer Bedfordshire deposit moratorium Maine bandwidth',0,0,0,511,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(29,'Tasty Plastic Sausages','Fantastic Steel Music Credit Card Account bluetooth SMTP Awesome Auto Loan Account mesh Customizable',0,0,0,60,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(30,'Sleek Soft Towels','Home quantifying Lead virtual Games Convertible Marks back-end bypassing THX pixel',0,0,0,448,'no-image.jpg',2,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(31,'Fantastic Rubber Pants','Cambridgeshire Industrial Paradigm National Supervisor protocol Towels withdrawal Checking Account B',0,0,0,931,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(32,'Unbranded Steel Bike','Music XML Shoes Sleek Wells tangible COM static Summit Profound',0,0,0,93,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(33,'Fantastic Concrete Towels','Credit Card Account Personal Loan Account navigating Libyan Dinar National Frozen Cedi Alabama progr',0,0,0,624,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(34,'Tasty Wooden Cheese','invoice Integration interfaces Coordinator fresh-thinking Money Market Account Crossing grow Riel Un',0,0,0,421,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(35,'Incredible Metal Computer','Chair Optional generate Operative Incredible Metal Fish Identity Dynamic Money Market Account Centra',0,0,0,625,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(36,'Ergonomic Granite Bacon','functionalities Avon circuit panel definition bleeding-edge Plastic innovate Tasty Handmade Metal Sh',0,0,0,235,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(37,'Intelligent Plastic Bacon','Lilangeni synthesizing Data markets matrix Avon JSON Granite Personal Loan Account fuchsia',0,0,0,843,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(38,'Fantastic Soft Chicken','microchip Coves Cambridgeshire granular Liaison initiatives Product Pula Credit Card Account Rustic',0,0,0,19,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(39,'Tasty Concrete Pants','bypassing archive connecting Kansas Practical client-driven cross-media redundant Communications ban',0,0,0,5,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(40,'Awesome Metal Hat','Kazakhstan bifurcated Yuan Renminbi Senior channels Democratic People\'s Republic of Korea Checking A',0,0,0,40,'no-image.jpg',3,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(41,'Sleek Granite Towels','Trinidad and Tobago Dollar Gorgeous Cotton Tuna National Games extensible adapter grid-enabled Ident',0,0,0,43,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(42,'Practical Concrete Pants','Frozen Cross-group model brand Cambridgeshire Shoes Extension Maryland Group digital',0,0,0,209,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(43,'Sleek Granite Table','plum Kina program Gloves Shores Burundi grey Home Loan Account transmitting collaboration',0,0,0,770,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(44,'Small Frozen Pizza','Architect synergies Falkland Islands (Malvinas) Robust Savings Account encoding regional Bike paymen',0,0,0,491,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(45,'Unbranded Rubber Bacon','withdrawal Cotton content-based Garden program cutting-edge deposit alarm withdrawal Chief',0,0,0,315,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(46,'Practical Concrete Gloves','Bike Berkshire Tuna Passage generating Seamless Usability best-of-breed Brunei Darussalam superstruc',0,0,0,511,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(47,'Handmade Wooden Mouse','bluetooth blue ivory generating iterate Identity yellow Arizona Checking Account platforms',0,0,0,28,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(48,'Awesome Granite Chair','challenge incubate Enhanced sexy Western Sahara pink e-business enterprise Extension Saint Lucia',0,0,0,895,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(49,'Awesome Cotton Sausages','Soft Fantastic Metal Bacon Incredible Bike Frozen Regional Generic Cotton Gloves productize Automoti',0,0,0,38,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(50,'Awesome Soft Shirt','Bacon Awesome Fresh Soap syndicate Florida cyan Investment Account Arkansas evolve Latvian Lats Slov',0,0,0,712,'no-image.jpg',4,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(51,'Handcrafted Concrete Shoes','PNG SMTP drive Corporate Automotive Unbranded Rwanda Franc European Unit of Account 17(E.U.A.-17) Be',0,0,0,511,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(52,'Handmade Wooden Tuna','intangible Colombian Peso Unidad de Valor Real copying stable Alaska Research Vision-oriented haptic',0,0,0,629,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(53,'Licensed Fresh Chips','Phased Dynamic Buckinghamshire solution Cordoba Oro auxiliary quantifying Practical Soft Keyboard st',0,0,0,537,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(54,'Rustic Wooden Chicken','Re-contextualized payment deposit customer loyalty PNG Developer Strategist Spain Central Brand',0,0,0,25,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(55,'Gorgeous Plastic Salad','haptic Security Concrete Function-based program Burundi Franc distributed Tasty Games mobile',0,0,0,908,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(56,'Ergonomic Concrete Ball','indigo Dynamic protocol Investment Account Supervisor Director bypass value-added Congo Mill',0,0,0,731,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(57,'Ergonomic Metal Bike','collaborative Reverse-engineered Harbor Producer fuchsia Fall transmit Product Executive Islands',0,0,0,642,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(58,'Ergonomic Metal Bacon','Advanced Home Money Market Account generating Handmade Granite Mouse challenge Rustic Hat Research B',0,0,0,897,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(59,'Small Rubber Computer','invoice synthesize invoice Lead productivity Generic Ball Gloves programming Virtual',0,0,0,991,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(60,'Refined Concrete Car','productize repurpose Extensions copy fault-tolerant XML Vermont Alaska 1080p transmitting',0,0,0,49,'no-image.jpg',5,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(61,'Sleek Steel Pants','payment Administrator wireless Regional Fresh viral Guatemala Berkshire Officer haptic',0,0,0,909,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(62,'Handcrafted Steel Pants','evolve Infrastructure Parkways even-keeled lime XML Unbranded synthesize program Nebraska',0,0,0,730,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(63,'Handmade Metal Keyboard','Multi-tiered Ergonomic Steel Car Planner Infrastructure internet solution Personal Loan Account func',0,0,0,170,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(64,'Incredible Fresh Chair','circuit Re-engineered Refined Concrete Keyboard incubate discrete interface technologies markets hac',0,0,0,497,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(65,'Tasty Fresh Fish','white composite web-enabled deposit firmware Crescent navigate synthesize systems Green',0,0,0,91,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(66,'Rustic Steel Pizza','1080p array Supervisor Cambridgeshire connecting Cambridgeshire Factors Clothing maximize Berkshire',0,0,0,147,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(67,'Handcrafted Cotton Table','Fresh Brand GB embrace withdrawal Massachusetts value-added microchip Credit Card Account Square',0,0,0,884,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(68,'Awesome Granite Computer','Engineer Industrial dynamic Zimbabwe Dollar Marshall Islands SQL Licensed Metal Cheese Representativ',0,0,0,378,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(69,'Handcrafted Steel Car','Facilitator benchmark calculate Plastic Madagascar reboot Compatible teal RSS Indiana',0,0,0,832,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41'),(70,'Practical Rubber Gloves','Fantastic generate scale Developer UIC-Franc Principal Checking Account alarm Iranian Rial Gorgeous',0,0,0,853,'no-image.jpg',6,1,'2020-08-13 13:02:41','2020-08-13 13:02:41');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('001-create_table_fiscal-condition.js'),('020-create_table_users.js'),('050-create_table_category.js'),('060-create_table_products.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `name_fantasy` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `cuit` varchar(20) DEFAULT NULL,
  `fiscal_condition_id` int(10) unsigned NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fiscal_condition_id` (`fiscal_condition_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fiscal_condition_id`) REFERENCES `fiscals_conditions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juanespinel@gmail.com','$2b$10$6/7cIv1J/MllFRxXs5mVbO/FHbkoF.B1ekXL6j5AvCySenUaXhHji','Monroe 860','CABA','Buenos Aires',0,'011-5263-7400','CandyShop','CandyShop','00-00000000-0',1,'juanespinel@gmail.com.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(2,'tomas@consek.com.ar','$2b$10$wf5i0Eshrw8QvfL0l6fl5ufJhKNvBcH2OHYN1WBo.X67malsdAuD6','Monroe 860','CABA','Buenos Aires',0,'11-3019-7729','CandyShop','CandyShop','00-00000000-0',5,'tomas@consek.com.ar.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(3,'mica.lew@hotmail.com','$2b$10$2v7/ILfkXuxeCCJI8bb5m.OOv0hC2vMuXfLauk/YVrNmZ9oOh2roi','Monroe 860','CABA','Buenos Aires',0,'011-5263-7400','CandyShop','CandyShop','00-00000000-0',1,'mica.lew@hotmail.com.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(4,'frankie.fcandia@gmail.com','1234567890','Monroe 860','CABA','Buenos Aires',0,'011-5263-7400','CandyShop','CandyShop','00-00000000-0',1,'no-image.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(5,'hbaravalle@digitalhouse.com','1234567890','Monroe 860','CABA','Buenos Aires',0,'011-5263-7400','CandyShop','CandyShop','00-00000000-0',1,'no-image.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(6,'uriel@digitalhouse.com','1234567890','Monroe 860','CABA','Buenos Aires',0,'011-5263-7400','CandyShop','CandyShop','00-00000000-0',1,'no-image.jpg',1,1,'2020-08-13 13:02:38','2020-08-13 13:02:38'),(7,'Damaris.Heathcote@hotmail.com','tgkL3oLdyUAIoE7u','Pacocha Underpass','Romaineside','New Mexico',30373,'701.951.3662','Predovic LLC','Turcotte, Moen and Hoppe','38099841',1,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(8,'Cameron_Boyer4@gmail.com','H2tM_ggjZTSpB2co','Beau Knolls','Farrellville','Montana',38979,'464-120-4272 x1180','Kuhic Inc','Gerlach LLC','45113865',1,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(9,'Ian.Mills25@yahoo.com','PCRR8M9f72HIEL8W','Enola Gardens','New Elmiratown','North Carolina',16917,'(809) 295-5222 x302','Thompson and Sons','Grimes - Rempel','87945147',1,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(10,'Trace.Gislason@gmail.com','SLsEt0E9B7sf3ocR','Halvorson Locks','New Brielle','New Mexico',96456,'(024) 267-1081','Okuneva LLC','Welch LLC','62454279',1,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(11,'Ezequiel_Beahan86@hotmail.com','qFET8HmKVSmEl5Ib','Lupe Green','Braunland','Washington',46689,'1-457-471-9859','Osinski, Lang and Schmitt','Russel - Ratke','52918807',1,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(12,'Mariah.Baumbach@gmail.com','emccByJenuwoJ3Vi','Hoppe Row','Shanahanland','Kentucky',39725,'083-835-0935','Boehm Group','Pfannerstill Group','43856093',2,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(13,'Lina.Predovic51@gmail.com','1Qe8jZS_nO1IVbQc','Doyle Green','West Sandrine','Colorado',99877,'(411) 115-8198 x1478','Feil, Borer and Cummings','Witting - Pfeffer','26732611',2,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(14,'Brigitte.Durgan@yahoo.com','j0HQkSERLcDB0lQE','Evelyn Hollow','Edytheshire','Iowa',59592,'395.297.4312','Jaskolski Group','Leuschke, Pacocha and Jacobs','68908875',2,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(15,'Kellen8@gmail.com','uU8RzghUc32noBUv','Streich Rapid','North Maurine','Oregon',2946,'765.856.7189 x32180','Renner Group','Volkman, Wiza and Goodwin','84925785',2,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(16,'Tito.Lehner@yahoo.com','J08fQW6WQwK2UHbQ','Dallas Pass','North Breannaport','Vermont',78865,'1-894-726-4575 x7223','Borer LLC','Turcotte, Mayert and Kiehn','00205071',2,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(17,'Otilia.Hansen88@hotmail.com','C6CFNbAZguM4vl91','Marcelino Village','Wolffville','Virginia',33402,'629-834-7420 x576','Schuppe, Swift and Kozey','Orn - Wiegand','95609794',3,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(18,'Lawrence_Walsh@hotmail.com','kB38ZKrAoTuFYZj1','Sawayn Orchard','Mayton','Vermont',53430,'882-083-6038','Rowe, Schmeler and Lockman','Johns - Weissnat','83377602',3,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(19,'Anais_Marquardt78@gmail.com','WQKo9o_Xez6FCwRf','Sanford Path','Farrellport','Montana',992,'(674) 071-2215 x8587','Hoeger - Barrows','Koepp, Shields and Spencer','47686385',3,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(20,'Jerel87@hotmail.com','rr3n1Ey6WpBJW3WP','Heidenreich Village','Tamialand','Washington',23056,'1-445-357-8357 x9545','Davis, Sipes and Friesen','Goodwin, Connelly and Nitzsche','78096610',3,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(21,'Brando_Zboncak11@gmail.com','m2jE8xRMsTikuFol','Anne Gardens','Pacochaside','Hawaii',48730,'1-094-280-1374','Larkin, Maggio and Bailey','Armstrong - Murray','81962607',3,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(22,'Branson.Maggio@gmail.com','P7DSgPdLkJgEOkqI','Lexi Dam','South Marioland','West Virginia',12208,'222-984-4047 x63207','McLaughlin - Bashirian','Hettinger, Lowe and Bogisich','86374260',4,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(23,'Donna.Reilly@yahoo.com','v1McEwIgMTEbVfrr','Margaretta Union','Padbergchester','Indiana',1893,'037-195-2266 x6225','Collier - Waelchi','Willms - Adams','25479986',4,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(24,'Deven.Rempel@gmail.com','uHc0spqNSUOnWpbk','Gerlach Street','Collierburgh','Hawaii',7439,'379-866-4986 x674','Bogisich - Windler','Pagac Inc','26039652',4,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(25,'Conor74@hotmail.com','70vr82ASqHN8ZjV5','Leffler Fields','Ethelynside','Maryland',70937,'664.527.9661','Hegmann, Willms and Terry','Bode - Weissnat','47913883',4,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(26,'Rodger.Pagac23@yahoo.com','GqmTXVhjHLOARfqq','Ashlee Centers','Port Gerdashire','Rhode Island',52081,'529-295-4566 x12855','Reichel LLC','Bayer Group','79958334',4,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(27,'Virginie52@gmail.com','aYFWkxd9dvAXjjr0','Wolf Trafficway','Kayleeport','West Virginia',95774,'181.492.6344 x417','Ruecker - Jast','Feeney - Wolff','26224994',5,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(28,'Elisa_McClure85@gmail.com','PEQU7flV0y3DJFXB','Delfina Crest','Klingstad','Ohio',27029,'985-510-3036','Pollich, Kassulke and Schmidt','Dickens, Weissnat and Cruickshank','11441020',5,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(29,'Alessandra_Grimes@yahoo.com','3TL0iiMW30bmz9sI','Swaniawski Heights','South Norwoodville','Minnesota',62171,'1-277-369-8607 x491','Homenick, Hoppe and Rempel','Schiller, Sporer and Halvorson','81566965',5,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(30,'Candace16@hotmail.com','eB1cKrejqa3G1js2','Simone Alley','Neldaburgh','Alabama',17974,'(365) 376-0718','Satterfield - Farrell','Walker and Sons','45813182',5,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(31,'Velda.Rath@hotmail.com','VJnR1JXy6OqaqhoT','Wintheiser Plain','Port Rebeccamouth','South Carolina',40447,'(858) 091-6020 x5477','Koelpin, Cummerata and Leffler','Stanton, Hessel and Fay','25368394',5,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(32,'Jarod.Wiza62@hotmail.com','RZno3scOH6XENjJF','Ralph Trace','New Guy','Illinois',76901,'(050) 387-8819 x8142','Carroll LLC','O\'Kon, Treutel and Fahey','74837652',6,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(33,'Clifton.McKenzie17@hotmail.com','BYVa_m9omexYEzRf','Aida Summit','Gottliebfort','New Jersey',56443,'1-037-927-2484 x0351','Rippin - Oberbrunner','Roob, Schuppe and Casper','41675977',6,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(34,'Marianne_Blanda@gmail.com','ZaoCF1UTO2wMU0Pp','Arthur Coves','Garfieldton','New Jersey',12475,'(363) 574-1892 x3906','Harris - Lind','Fahey, Turcotte and Bruen','07881968',6,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(35,'Courtney_Morar@gmail.com','Q0Ie2c3w4M1jez1B','Wintheiser Lakes','Kolefort','California',79758,'(258) 534-4451','Rowe - Sporer','Johnson - Gerhold','26266862',6,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40'),(36,'Leonora_Schmidt51@yahoo.com','Ebffs7rva3FjEHiW','Vincent Ramp','Ewaldport','Alabama',16483,'1-052-173-9483 x3729','Harris LLC','Farrell, Willms and Powlowski','90744819',6,'no-image.jpg',0,1,'2020-08-13 13:02:40','2020-08-13 13:02:40');
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

-- Dump completed on 2020-08-13 18:35:28
