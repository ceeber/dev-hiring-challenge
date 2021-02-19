-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Fev-2021 às 21:09
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `repositorio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `languageusers`
--

CREATE TABLE `languageusers` (
  `id` int(11) NOT NULL,
  `cod_item` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `languageusers`
--

INSERT INTO `languageusers` (`id`, `cod_item`, `name`, `full_name`, `url`, `language`, `created_at`, `update_at`) VALUES
(1, 30054444, 'react-mixin', 'brigand/react-mixin', 'https://github.com/brigand/react-mixin', 'JavaScript', '2021-02-17 14:41:29', '2021-02-17 14:41:29'),
(2, 43300825, 'react-native-tabs', 'aksonov/react-native-tabs', 'https://github.com/aksonov/react-native-tabs', 'JavaScript', '2021-02-17 14:41:29', '2021-02-17 14:41:29'),
(3, 24117219, 'tmpnb', 'jupyter/tmpnb', 'https://github.com/jupyter/tmpnb', 'JavaScript', '2021-02-17 16:06:00', '2021-02-17 16:06:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `languageusers`
--
ALTER TABLE `languageusers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `languageusers`
--
ALTER TABLE `languageusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=635;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
