-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3309
-- Generation Time: Aug 11, 2019 at 06:51 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restapi`
--

-- --------------------------------------------------------



--
-- Table structure for table `tenants`
--

DROP TABLE IF EXISTS `tenants`;
CREATE TABLE IF NOT EXISTS `tenants` (
  `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(10) NOT NULL,
  `imageName` varchar(10) NOT NULL,
  `apartmentNumber` varchar(3) NOT NULL,
  `floor` varchar(3) NOT NULL,
  `isLeased` bit(1) NOT NULL,
  `houseCommittee` bit(1) NOT NULL,
  `adress` varchar(50) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `emial` varchar(25) NOT NULL,
  `monthlyPayment` varchar(6) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `dateEntered` datetime NOT NULL,
  `dateUpdated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `tenants` (`id`, `firstName`, `lastName`, `imageName`, `apartmentNumber`, `floor`, `isLeased`, `houseCommittee`, `adress`, `phoneNumber`, `emial`, `monthlyPayment`, `comment`, `dateEntered`, `dateUpdated`) VALUES (NULL, 'demo', 'demo', 'null', '4', '2', b'0', b'0', 'tel aviv', '05012301213', 'avi@demo.com', '45', 'no coment', '2019-08-12 00:00:00', CURRENT_TIMESTAMP);






--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `clientId` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(10) NOT NULL,
  `age` varchar(3) NOT NULL,
  `adress` varchar(50) NOT NULL,
  `dateEntered` datetime NOT NULL,
  `dateUpdated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`clientId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`clientId`, `firstName`, `lastName`, `age`, `adress`, `dateEntered`, `dateUpdated`) VALUES
(2, 'aaa', 'eee', '', 'tel aviv', '2019-08-11 00:00:00', '2019-08-11 18:50:19'),
(4, 'bbb', 'ddd', '35', 'ramat gan', '2019-08-11 00:00:00', '2019-08-11 18:50:19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
