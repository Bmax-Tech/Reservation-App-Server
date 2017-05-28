/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.6.21 : Database - reservation_app
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`reservation_app` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `reservation_app`;

/*Table structure for table `hotels` */

DROP TABLE IF EXISTS `hotels`;

CREATE TABLE `hotels` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `hotels` */

insert  into `hotels`(`id`,`name`,`location`,`image`) values (1,'Hilton','Colombo',NULL),(2,'Galadari','Colombo',NULL),(3,'Taj','Colombo',NULL),(4,'Citrus','Waskaduwa',NULL),(5,'Amaya Hills','kandy',NULL),(6,'Alphine','nuwaraeliya',NULL),(7,'Palm Beach','galle',NULL);

/*Table structure for table `occupations` */

DROP TABLE IF EXISTS `occupations`;

CREATE TABLE `occupations` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `occupations` */

insert  into `occupations`(`id`,`name`,`label`) values (1,'student','Student'),(2,'lecturer','Lecturer'),(3,'professor','Professor');

/*Table structure for table `reservations` */

DROP TABLE IF EXISTS `reservations`;

CREATE TABLE `reservations` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `hotel_id` int(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `count` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `reservations` */

insert  into `reservations`(`id`,`hotel_id`,`name`,`date`,`count`) values (5,2,'ERRsdfdsf','10:22',1),(8,3,'sdfdsf','13:00',4),(9,2,'dfgfdgd','13:00',5656),(10,3,'asas','15:00',2),(11,1,'QWQWW','16:00',3);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`occupation`,`image`) values (1,'abc','123','ss','sfsdfsdfs');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
