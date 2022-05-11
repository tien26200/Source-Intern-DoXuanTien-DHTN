-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: booking
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `checkout`
--

DROP TABLE IF EXISTS `checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `checkout` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` text,
  `commune` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `checkout_id` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK5euvb0r4pm0p3bb3t8rc232iu` (`user_id`),
  CONSTRAINT `FK5euvb0r4pm0p3bb3t8rc232iu` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkout`
--

LOCK TABLES `checkout` WRITE;
/*!40000 ALTER TABLE `checkout` DISABLE KEYS */;
INSERT INTO `checkout` VALUES (10,'ABC','EaTam','BMT','Dak Lak',895,4,'5a3a65fb-7064-454e-8688-6197087cf168','0972727272','2022-04-13 10:33:44','2022-04-12 10:33:48',0),(11,'ABCererre','EaTam','BMT','Dak Lak',895,4,'8e41ecd3-1f60-4355-a0a5-cf89b04526f7','0972727272','2022-04-12 10:33:51','2022-04-19 10:33:54',1),(13,'ABC','EaTam','BMT','Dak Lak',110,4,'d3b795d4-c556-4d8e-bf5d-ec1073000bcd','0972727272','2022-04-11 10:34:01','2022-04-20 10:34:03',0),(14,'kokoko','EaTam','BMT','Dak Lak',250,4,'d88bff84-2f63-446c-b6b3-af590e4049fe','0204141414','2022-04-11 10:34:05','2022-04-20 10:34:07',1),(22,'30 no trang long','EaTling','BMT','Dak Lak',64,8,'349c1d43-c10a-4b4f-a1ab-52b037f8e497','03487687','2022-05-06 16:20:00','2022-05-06 16:20:00',0);
/*!40000 ALTER TABLE `checkout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-06 18:52:18
