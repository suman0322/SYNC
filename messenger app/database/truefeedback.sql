-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 07:06 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `truefeedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `allbox`
--

CREATE TABLE `allbox` (
  `address` varchar(255) NOT NULL,
  `addkey` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `allbox`
--

INSERT INTO `allbox` (`address`, `addkey`, `timestamp`) VALUES
('Sanskar', '$2y$10$.WaLJZwMisGcFz.lAenaZuNP.DxIrrhWhFEr0l/4yTCZlLUJ9.Vj.', '2022-08-08 14:52:38'),
('snskar', '$2y$10$lDLTpzz06EyqZRqcueGireCZeN9FiqF4.U4Bi6MZL3Vgs0B7SNESC', '2022-08-08 14:54:53'),
('snskar125', '$2y$10$..lNhCyaIYI3VGfI5SCHq.9SCo0aEXDX0CjcMS5sn.dP4nIuFFgnS', '2022-08-08 16:31:15');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msgfrom` varchar(255) NOT NULL,
  `msgto` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msgfrom`, `msgto`, `message`, `timestamp`) VALUES
('::1', 'Sanskar', 'Hey', '2022-08-08 15:15:14'),
('::1', 'Sanskar', 'Hey', '2022-08-08 15:17:24'),
('::1', 'snskar', 'Hello', '2022-08-08 15:20:23'),
('::1', 'snskar', 'dsa', '2022-08-08 15:21:19'),
('::1', 'Sanskar', 'Hello Sanskar I am from LocalHost', '2022-08-08 15:23:41'),
('::1', 'snskar', 'saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2022-08-08 15:31:32'),
('::1', 'snskar', 'Hello Sanskar Its a new Mail', '2022-08-08 16:02:29'),
('::1', 'snskar', 'Hello Sanskar Its a new messege', '2022-08-08 16:08:38'),
('::1', 'snskar', 'Heyy Sanskar Good Morning', '2022-08-09 02:44:36'),
('::1', 'snskar125', 'Hello Sanskar Itss to Check the working of this New Website .', '2022-08-09 02:53:54'),
('::1', 'Sanskar', 'saffffffffffffffffffffffffff', '2022-08-09 04:58:01'),
('::1', 'Sanskar', 'safasffffffffffffffff', '2022-08-09 05:07:19'),
('::1', 'Sanskar', 'sadddddddddddddddddddddddddd', '2022-08-09 05:12:21'),
('::1', 'Sanskar', 'sadddddddddddddddddddddddddddddddd', '2022-08-09 05:12:36'),
('::1', 'Sanskar', 'HEllooooooooooooooooo', '2022-08-09 05:34:28'),
('::1', 'Sanskar', 'dsadfasvcd afd afdsfafdsacdcsd as', '2022-08-10 05:05:15'),
('::1', 'snskar125', 'sfaads dfaws fdsf a dasdfas sd s', '2022-08-10 05:05:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
