-- MySQL dump 10.13  Distrib 8.0.27, for macos12.0 (arm64)
--
-- Host: localhost    Database: westarbucks_2
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0dd62be9-89c7-4d83-ac10-da516d27d45b','d0cc3d2222943e09ceac55805f856ceb7fa4da07f7a20ff5de5f6faa63b040b3','2021-12-18 16:41:24.821','20211218162820_init',NULL,NULL,'2021-12-18 16:41:24.743',1),('5bc75a7e-6c23-4318-9131-db4d13506a39','705d83edeb632014f4502c3f3c22cf5dce41e11eaffb8b998989514993e93bb6','2021-12-18 16:45:06.592','20211218164506_create_users',NULL,NULL,'2021-12-18 16:45:06.588',1),('e3d2f3b9-dc2c-430d-833b-783c87a59a13','450ee7538068b670e30074ffc3058440a19324af49bd94c9be19156d477ab0cc','2021-12-18 16:41:24.959','20211218164124_create_nutritions',NULL,NULL,'2021-12-18 16:41:24.949',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergies`
--

DROP TABLE IF EXISTS `allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergies`
--

LOCK TABLES `allergies` WRITE;
/*!40000 ALTER TABLE `allergies` DISABLE KEYS */;
INSERT INTO `allergies` VALUES (1,'우유'),(2,'대두'),(3,'밀');
/*!40000 ALTER TABLE `allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'콜드 브루 커피'),(2,'브루드 커피'),(3,'에스프레소'),(4,'프라푸치노'),(5,'블렌디드'),(6,'스타벅스 피지오'),(7,'티(티바나)'),(8,'기타 제조 음료'),(9,'스타벅스 주스(병음료)');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(1000) NOT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9200000003672]_20211027165528281.jpg',1),(2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg',2),(3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg',3),(4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg',4),(5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[128401]_20211021085629123.jpg',5),(6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003690]_20211118142702357.jpg',6),(7,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[168031]_20211021085736580.jpg',7),(8,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002760]_20210415133558068.jpg',8),(9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003699]_20211118143249044.jpg',9),(10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg',10),(11,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[107025]_20210419104756955.jpg',11),(12,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[107051]_20210419112151972.jpg',12),(13,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000001931]_20210419130043730.jpg',13),(14,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000056]_20210415135215632.jpg',14),(15,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003693]_20211118142933650.jpg',15),(16,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003696]_20211118143125337.jpg',16),(17,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000002853]_20210419104333070.jpg',17),(18,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000002850]_20210419125156886.jpg',18);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutritions`
--

DROP TABLE IF EXISTS `nutritions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutritions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `productsId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `nutritions_productsId_fkey` (`productsId`),
  CONSTRAINT `nutritions_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutritions`
--

LOCK TABLES `nutritions` WRITE;
/*!40000 ALTER TABLE `nutritions` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutritions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_allergies`
--

DROP TABLE IF EXISTS `product_allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_allergies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productsId` int DEFAULT NULL,
  `allergiesId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_allergies_productsId_fkey` (`productsId`),
  KEY `product_allergies_allergiesId_fkey` (`allergiesId`),
  CONSTRAINT `product_allergies_allergiesId_fkey` FOREIGN KEY (`allergiesId`) REFERENCES `allergies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_allergies_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_allergies`
--

LOCK TABLES `product_allergies` WRITE;
/*!40000 ALTER TABLE `product_allergies` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `korean_name` varchar(100) NOT NULL,
  `english_name` varchar(100) NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'토피 넛 콜드 브루','Toffee Nut Cold Brew',1),(2,'나이트로 바닐라 크림','Nitro Vanilla Cream',1),(3,'아이스 커피','Iced Coffee',2),(4,'오늘의 커피','Brewed Coffee',2),(5,'아이스 토피 넛 라떼','Iced Toffee Nut Latte',3),(6,'아이스 홀리데이 돌체 쿠키 라떼','Iced Holiday Dolce Cookie Latte',3),(7,'토피 넛 프라푸치노','Toffee Nut Frappuccino',4),(8,'더블 에스프레소 칩 프라푸치노','Double Espresso Chip Frappuccino',4),(9,'스노우 민트 초콜릿 블렌디드','Snow Mint Chocolate Blended',5),(10,'딸기 딜라이트 요거트 블렌디드','Strawberry Delight Yogurt Blended',5),(11,'블랙 티 레모네이드 피지오','Black Tea Lemonade Starbucks Fizzio',6),(12,'쿨 라임 피지오','Cool Lime Starbucks Fizzio',6),(13,'라임 패션 티','Lime Passion Tea',7),(14,'민트 블렌드 티','Mint Blend Brewed Tea',7),(15,'스노우 민트 초콜릿','Snow Mint Chocolate',8),(16,'아이스 스노우 민트 초콜릿','Iced Snow Mint Chocolate',8),(17,'기운내라임 190ML','Lime & Lemon',9),(18,'파이팅 청귤 190ML','Green Tangerine & Yuja',9);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_allergies`
--

DROP TABLE IF EXISTS `products_allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_allergies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `allergy_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `allergy_id` (`allergy_id`),
  CONSTRAINT `products_allergies_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_allergies_ibfk_2` FOREIGN KEY (`allergy_id`) REFERENCES `allergies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_allergies`
--

LOCK TABLES `products_allergies` WRITE;
/*!40000 ALTER TABLE `products_allergies` DISABLE KEYS */;
INSERT INTO `products_allergies` VALUES (1,1,1),(2,2,1),(3,5,1),(4,6,1),(5,6,2),(6,6,3),(7,7,1),(8,8,1),(9,9,1),(10,9,2),(11,10,1),(12,15,1),(13,15,2),(14,16,1),(15,16,2);
/*!40000 ALTER TABLE `products_allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phoneNumber` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policyAgreed` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jty7539@naver.com','TaeYeong',NULL,NULL,1),(3,'2@naver.com','sky',NULL,NULL,1),(4,'3@naver.com','TaeJoon',NULL,NULL,1),(5,'4@naver.com','HyoSang',NULL,NULL,1),(7,'5@naver.com','JunHyek',NULL,NULL,1);
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

-- Dump completed on 2021-12-19  2:24:12
