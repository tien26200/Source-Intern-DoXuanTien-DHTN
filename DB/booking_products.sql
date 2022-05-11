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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1cf90etcu98x1e6n9aks3tel3` (`category_id`),
  CONSTRAINT `FK1cf90etcu98x1e6n9aks3tel3` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (75,'2022-05-06 05:08:36','Đồng hồ kim trôi',10,'Patek Phillipese TT1','a23fb8c4-5128-45e2-a3ae-3449a81dbbc93-removebg-preview.png',65),(76,'2022-05-06 05:08:57','Đồng hồ xịn lắm ',39,'Hubblot','6ace61e5-307a-4b91-8207-b531d7c65096chopard-g-p-m-h-power-control-titanium-and-stainless-steel-168569-300-removebg-preview.png',73),(77,'2022-05-06 05:09:24','undefined',20,'Orient Y25','5fc332d8-96e0-4586-a2f6-630f799a1e1f7-removebg-preview.png',64),(78,'2022-05-06 05:09:44','Sieeu ngonnn',5,'Ctizel','379d3f22-dddd-4efd-968d-5eb0f44f2fa91-removebg-preview.png',74),(79,'2022-05-06 05:14:40','Đồng hồ xịn lắm ',10,'Longiness GTN','30a0ddf3-08af-4404-a255-dd1762119b14arnold-son-dte-1dtar-l01a-c120a-removebg-preview.png',67),(80,'2022-05-06 05:49:51','Đồng hồ kim trôi',5,'Longiness GTN','1588e88a-dae5-4b7e-847b-39250908dc2aarnold-son-tb-sir-john-franklin-set-1arap-m06a-c120p-removebg-preview.png',67),(81,'2022-05-06 09:22:36','Đồng hồ xịn lắm ',10,'Patek Phillipese','dd403889-7577-4287-80f0-67a780586814arnold-son-dstb-1ataw-l04a-c121w-removebg-preview.png',65),(82,'2022-05-06 14:16:43','Đồng hồ kim trôi',10,'Patek Phillipese TT1','3fc724a2-d9c9-41d6-b0ba-e630cb933bcfarnold-son-hm-perpetual-moon-1glar-i01a-c122a-removebg-preview.png',65);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-06 18:52:17
