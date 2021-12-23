-- MySQL dump 10.13  Distrib 8.0.27, for macos12.0 (arm64)
--
-- Host: localhost    Database: we_bucks_backend
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
INSERT INTO `_prisma_migrations` VALUES ('1e3a6e5d-31c5-42ca-8386-8a1b1638e135','2cb0a59e908585675f9e3d272a287ac4512e36aa6ad265d2b7bed91116dadf62','2021-12-20 17:11:16.750','20211220104717_init',NULL,NULL,'2021-12-20 17:11:16.674',1),('79a5aecb-3918-433e-9fed-54f061763259','f644e953004a22bda79e3371b16ee06be002c3115815d3068e8c1b375169788f','2021-12-20 17:11:16.913','20211220171116_add',NULL,NULL,'2021-12-20 17:11:16.897',1);
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
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'콜드 브루 커피'),(2,'브루드 커피'),(3,'에스프레소'),(4,'프라푸치노'),(5,'블렌디드');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heart`
--

DROP TABLE IF EXISTS `heart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usersId` int NOT NULL,
  `productsId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `heart_usersId_fkey` (`usersId`),
  KEY `heart_productsId_fkey` (`productsId`),
  CONSTRAINT `heart_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `heart_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heart`
--

LOCK TABLES `heart` WRITE;
/*!40000 ALTER TABLE `heart` DISABLE KEYS */;
/*!40000 ALTER TABLE `heart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productsId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `images_productsId_fkey` (`productsId`),
  CONSTRAINT `images_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9200000003672]_20211027165528281.jpg',1),(2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg',2),(3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg',3),(4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg',4),(5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[128401]_20211021085629123.jpg',5),(6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003690]_20211118142702357.jpg',6),(7,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[168031]_20211021085736580.jpg',7),(8,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002760]_20210415133558068.jpg',8),(9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/11/[9200000003699]_20211118143249044.jpg',9),(10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg',10);
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
  `amount` decimal(65,30) NOT NULL,
  `productsId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `nutritions_productsId_fkey` (`productsId`),
  CONSTRAINT `nutritions_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `koreanName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `englishName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productInfo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isNew` tinyint(1) NOT NULL,
  `categoriesId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_categoriesId_fkey` (`categoriesId`),
  CONSTRAINT `products_categoriesId_fkey` FOREIGN KEY (`categoriesId`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'토피 넛 콜드 브루','Toffee Nut Cold Brew','콜드 브루로 깔끔하게 즐기는 토피 넛 음료!',1,1),(2,'나이트로 바닐라 크림','Nitro Vanilla Cream','부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!',0,1),(3,'아이스 커피','Iced Coffee','깔끔하고 상큼함이 특징인 시원한 아이스 커피',0,2),(4,'오늘의 커피','Brewed Coffee','신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피',0,2),(5,'아이스 토피 넛 라떼','Iced Toffee Nut Latte','스타벅스의 겨울 시그니처 음료 더 이상의 다른 설명은 필요 없는 스타벅스 정통의 오리지널 토피 넛 라떼',1,3),(6,'아이스 홀리데이 돌체 쿠키 라떼','Iced Holiday Dolce Cookie Latte','블론드 에스프레소의 부드러움에 돌체 쿠키 소스와 크리스마스에 어울리는 쿠키 토핑으로 마음이 따뜻해지는 음료',1,3),(7,'토피 넛 프라푸치노','Toffee Nut Frappuccino','스타벅스의 겨울 시그니처 음료 더 이상의 다른 설명은 필요 없는 스타벅스 정통의 오리지널 토피 넛 프라푸치노',1,4),(8,'더블 에스프레소 칩 프라푸치노','Double Espresso Chip Frappuccino','리스트레토 에스프레소 2샷과 에스프레소 칩, 하프앤하프가 진하게 어우러진 커피의 기본에 충실한 프라푸치노',0,4),(9,'스노우 민트 초콜릿 블렌디드','Snow Mint Chocolate Blended','유기농 말차와 화이트 초콜릿 그리고 민트 초콜릿의 새로운 조합으로 새롭게 즐기는 크리스마스 블렌디드 음료',1,5),(10,'딸기 딜라이트 요거트 블렌디드','Strwberry Delight Yogurt Blended','유산균이 살아있는 리얼 요거트와 풍성한 딸기 과육이 더욱 상큼하게 어우러진 과일 요거트 블렌디드',0,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsAllergies`
--

DROP TABLE IF EXISTS `productsAllergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productsAllergies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productsId` int NOT NULL,
  `allergiesId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productsAllergies_productsId_fkey` (`productsId`),
  KEY `productsAllergies_allergiesId_fkey` (`allergiesId`),
  CONSTRAINT `productsAllergies_allergiesId_fkey` FOREIGN KEY (`allergiesId`) REFERENCES `allergies` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `productsAllergies_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsAllergies`
--

LOCK TABLES `productsAllergies` WRITE;
/*!40000 ALTER TABLE `productsAllergies` DISABLE KEYS */;
INSERT INTO `productsAllergies` VALUES (1,1,1),(2,2,1),(3,5,1),(4,6,1),(5,6,2),(6,6,3),(7,7,1),(8,8,1),(9,9,1),(10,9,2),(11,10,1);
/*!40000 ALTER TABLE `productsAllergies` ENABLE KEYS */;
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
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_agreed` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dev.taeyeong@gmail.com','AA123','TaeYeong',NULL,NULL,1),(2,'junhyeok@gmail.com','asdf2r','JunHyeok',NULL,NULL,1),(3,'hyosang@gmail.com','12312321','hyosang',NULL,NULL,1),(4,'sky@gmail.com','dfjkj1l2','sky',NULL,NULL,1),(5,'taejun@gmail.com','jdsklaf324','taejun',NULL,NULL,1),(19,'bcryptTest@gmail.com','$2b$10$Xsq/4wCeqGLP6.viUv6OWuSjEeVg.iRhjm7RhrHCkkWeCRH.HiLCW','1234',NULL,NULL,1),(20,'bcryptTest2@gmail.com','$2b$10$dBM1VfhbnegUgDgs4h3NXeGKghc4vkV8DJWC.OwlTIiTeiY1WrZ.m','1234',NULL,NULL,1);
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

-- Dump completed on 2021-12-21  2:17:46
