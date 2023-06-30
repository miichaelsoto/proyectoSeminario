-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_final
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `empresa` varchar(45) NOT NULL,
  `fkSoporte` int DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  KEY `fksoporte_idx` (`fkSoporte`),
  CONSTRAINT `fksoporte` FOREIGN KEY (`fkSoporte`) REFERENCES `soporte` (`idSoporte`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Cliente1','Empresa 1',NULL),(3,'Nury Maria Jose De leon Vasquez','123',NULL),(26,'Michael','adfklj',NULL),(28,'Prueba completa','noc',NULL),(42,'lo logre ','al fin',NULL),(43,'prueba1','miryempresarial',NULL),(44,'Miry De leon','Soto Company',NULL);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soporte`
--

DROP TABLE IF EXISTS `soporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soporte` (
  `idSoporte` int NOT NULL AUTO_INCREMENT,
  `tipoSoporte` varchar(45) DEFAULT NULL,
  `detalleSoporte` varchar(45) DEFAULT NULL,
  `fechaInicioPlan` date DEFAULT NULL,
  `fechaFinPlan` date DEFAULT NULL,
  `horaInicioPlan` time DEFAULT NULL,
  `horaFinPlan` time DEFAULT NULL,
  `solucion` varchar(150) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `idUsuario` int DEFAULT NULL,
  `idCliente` int DEFAULT NULL,
  `fechaInicioSop` date DEFAULT NULL,
  `fechaFinSop` date DEFAULT NULL,
  `horaInicioSop` time DEFAULT NULL,
  `horaFinSop` time DEFAULT NULL,
  PRIMARY KEY (`idSoporte`),
  KEY `idUsuario_idx` (`idUsuario`),
  KEY `idCliente_idx` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soporte`
--

LOCK TABLES `soporte` WRITE;
/*!40000 ALTER TABLE `soporte` DISABLE KEYS */;
INSERT INTO `soporte` VALUES (4,'Infraestructura','Error falta',NULL,NULL,NULL,NULL,'no se donde es','En espera',0,1,'2023-06-26',NULL,'20:41:00',NULL),(8,'afds','',NULL,NULL,NULL,NULL,NULL,NULL,1,1,NULL,NULL,NULL,NULL),(9,'del bueno','',NULL,NULL,NULL,NULL,NULL,NULL,1,28,NULL,NULL,NULL,NULL),(10,'probando',NULL,'2023-06-25','2023-06-22','21:04:00','13:04:00',NULL,'Pendiente Ruta',1,0,NULL,NULL,NULL,NULL),(14,'Soporte','no le enciende la pc',NULL,NULL,NULL,NULL,'me cole a la casa','Segunda revision',0,44,'2023-06-27','2023-06-28','23:48:00',NULL);
/*!40000 ALTER TABLE `soporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicacion` (
  `idUbicacion` int NOT NULL AUTO_INCREMENT,
  `pais` varchar(45) DEFAULT NULL,
  `departamento` varchar(45) DEFAULT NULL,
  `municipio` varchar(80) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `coordenadas` varchar(100) DEFAULT NULL,
  `idCliente` int DEFAULT NULL,
  `nomCli` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUbicacion`),
  KEY `idCliente_idx` (`idCliente`),
  CONSTRAINT `idClienteU` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicacion`
--

LOCK TABLES `ubicacion` WRITE;
/*!40000 ALTER TABLE `ubicacion` DISABLE KEYS */;
INSERT INTO `ubicacion` VALUES (1,'Guatemala','Guatemala','Guatemala','Zona 10 ','1192,1231,123',1,NULL),(2,'asdf','prueba1','prueba1','adflkafssdf','prueba1',1,NULL),(3,'afds','fd','afd','afd','afd',26,'Michael'),(4,'Guatemala','Suchitepequez','Mazatenango','Parque Central de Mazategango','19°25\'42\'\' N  99°7\'66\'\' O',28,'Prueba completa'),(5,'adfa','adg','agf','sdfg','sdfg',42,'lo logre '),(6,'gt','asdf','dgs','gdfs','sgdf',43,'prueba1'),(7,'Guatema','Escuintla','Nueva Concepcion','a la par del parque frente a banrural','13,12,,,234,234',44,'Miry De leon');
/*!40000 ALTER TABLE `ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `fkSoporteUs` int DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `fkSoporte_idx` (`fkSoporteUs`),
  CONSTRAINT `fkSoporteUs` FOREIGN KEY (`fkSoporteUs`) REFERENCES `soporte` (`idSoporte`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabla de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'michael','soto','123','1','msotos@miumg.edu.gt',NULL),(19,'Nury Maria Jose De leon Vasquez','prueba','miry123','cliente','nur@gmai.com',NULL),(20,'Nury Maria Jose De leon Vasquez','prueba','sadf','tecnico','nur@gmai.com',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30  7:42:30
