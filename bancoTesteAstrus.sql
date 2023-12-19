-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.30 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para testeastrus
CREATE DATABASE IF NOT EXISTS `testeastrus` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `testeastrus`;

-- Copiando estrutura para tabela testeastrus.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.failed_jobs: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela testeastrus.fornecedoras
CREATE TABLE IF NOT EXISTS `fornecedoras` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endereco` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uf` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.fornecedoras: ~5 rows (aproximadamente)
INSERT INTO `fornecedoras` (`id`, `nome`, `endereco`, `cidade`, `uf`, `created_at`, `updated_at`) VALUES
	(1, 'Nestle', 'Rua Euclides, 156', 'São Paulo', 'SP', '2023-12-15 15:55:18', '2023-12-15 15:55:18'),
	(2, 'Garoto', 'Rua ABC, 369', 'Rio de Janeiro', 'RJ', '2023-12-15 15:59:52', '2023-12-15 15:59:52'),
	(3, 'Lacta', 'Rua Terezinha, 1200', 'Belo Horizonte', 'MG', '2023-12-15 15:59:52', '2023-12-15 15:59:52'),
	(4, 'Neugebauer', 'Av. Principal, 256', 'Porto Alegre', 'RS', '2023-12-15 15:59:52', '2023-12-15 15:59:52'),
	(5, '3 corações', 'Rua Teste, 789', 'Curitiba', 'PR', '2023-12-15 15:59:52', '2023-12-15 15:59:52');

-- Copiando estrutura para view testeastrus.info_produtos
-- Criando tabela temporária para evitar erros de dependência de VIEW
CREATE TABLE `info_produtos` (
	`id` BIGINT(20) UNSIGNED NOT NULL,
	`nome` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`descricao` TEXT NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`fornecedora` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`valor` DOUBLE(8,2) NOT NULL
) ENGINE=MyISAM;

-- Copiando estrutura para tabela testeastrus.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.migrations: ~0 rows (aproximadamente)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(7, '2014_10_12_000000_create_users_table', 1),
	(8, '2014_10_12_100000_create_password_reset_tokens_table', 1),
	(9, '2019_08_19_000000_create_failed_jobs_table', 1),
	(10, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(11, '2022_12_15_115730_fornecedoras', 1),
	(12, '2023_12_14_000407_produtos', 1);

-- Copiando estrutura para tabela testeastrus.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.password_reset_tokens: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela testeastrus.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.personal_access_tokens: ~15 rows (aproximadamente)
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 11, 'JWT', '9bc727030d8379104de053a4d5cfdec2f71fc776a9ba37f2cd334d5f59c5aaaa', '["*"]', NULL, NULL, '2023-12-15 15:38:11', '2023-12-15 15:38:11'),
	(2, 'App\\Models\\User', 11, 'JWT', 'c246313a95d0b4008a93fc2de9f6cad332f459ce4ff916919249f6e495e26215', '["*"]', NULL, NULL, '2023-12-15 15:39:17', '2023-12-15 15:39:17'),
	(3, 'App\\Models\\User', 11, 'JWT', '6a493d02e006a32eda07831822afb813d209fab71e5078e4b126b9f11f0aa114', '["*"]', NULL, NULL, '2023-12-15 15:42:03', '2023-12-15 15:42:03'),
	(4, 'App\\Models\\User', 11, 'JWT', '561b622970adddf171d77f6c285aa8355c5aae30810f79ef7da7e0ae04038f9f', '["*"]', NULL, NULL, '2023-12-15 15:42:18', '2023-12-15 15:42:18'),
	(5, 'App\\Models\\User', 11, 'JWT', '814b4885718f0be93b34d267ba34f71940bc78130d9fcdf653301d6c3413d31f', '["*"]', NULL, NULL, '2023-12-15 15:42:20', '2023-12-15 15:42:20'),
	(6, 'App\\Models\\User', 11, 'JWT', '6d1fb368ced58f76a2b18ec95736c1add985266daaebe732ccfb59372ee98394', '["*"]', NULL, NULL, '2023-12-15 15:42:54', '2023-12-15 15:42:54'),
	(7, 'App\\Models\\User', 11, 'JWT', '701a644e0f11cd4490ed86b9ef4649723428a88477163185a1f85797259dea62', '["*"]', NULL, NULL, '2023-12-15 15:43:08', '2023-12-15 15:43:08'),
	(8, 'App\\Models\\User', 11, 'JWT', 'efb3b997e7d46bd65059983e017425b60532307a1e96729bcb04d3212526dd5f', '["*"]', NULL, NULL, '2023-12-16 14:37:30', '2023-12-16 14:37:30'),
	(9, 'App\\Models\\User', 11, 'JWT', '009dd13a4cd7e7d2847f05464b947cfc0ac3289e7bd8f248a0c2a6afe0cefa5e', '["*"]', NULL, NULL, '2023-12-16 16:15:36', '2023-12-16 16:15:36'),
	(10, 'App\\Models\\User', 11, 'JWT', '5881af6737987b314fb5b318c25dd66757aa876b9980e4d69b1d1d19be7d95d4', '["*"]', NULL, NULL, '2023-12-17 13:46:15', '2023-12-17 13:46:15'),
	(11, 'App\\Models\\User', 11, 'JWT', '1ff1aa2fdbbf3cee46968009208bc7ece8ca532439c957127fbee872257d11c3', '["*"]', NULL, NULL, '2023-12-17 14:00:48', '2023-12-17 14:00:48'),
	(12, 'App\\Models\\User', 11, 'JWT', '18965974e060848058470da0f0e57b8009c219c859dd98b9031bf198173bdfc3', '["*"]', NULL, NULL, '2023-12-18 15:03:23', '2023-12-18 15:03:23'),
	(13, 'App\\Models\\User', 11, 'JWT', 'baf1dce2c68621cd0c0e16053e2d3560ca8d17009422da1b3b6ff43224267f8e', '["*"]', NULL, NULL, '2023-12-18 15:05:53', '2023-12-18 15:05:53'),
	(14, 'App\\Models\\User', 11, 'JWT', 'db2cc6f9f9aa6bb64882fc7548ef35962a2ecf654733a988e45411799c4044cd', '["*"]', NULL, NULL, '2023-12-18 16:06:43', '2023-12-18 16:06:43'),
	(15, 'App\\Models\\User', 11, 'JWT', 'aee2d42607fc7ba5beaaba657507254df74867129ce55959a24daec02302adf4', '["*"]', NULL, NULL, '2023-12-19 01:54:12', '2023-12-19 01:54:12'),
	(16, 'App\\Models\\User', 11, 'JWT', '5b13d8d29533a08038d4c33864cbef1acd7dd577d6780db5acac91eb41305edf', '["*"]', NULL, NULL, '2023-12-19 14:55:08', '2023-12-19 14:55:08');

-- Copiando estrutura para tabela testeastrus.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` double(8,2) NOT NULL,
  `fk_fornecedora` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `produtos_fk_fornecedora_foreign` (`fk_fornecedora`),
  CONSTRAINT `produtos_fk_fornecedora_foreign` FOREIGN KEY (`fk_fornecedora`) REFERENCES `fornecedoras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.produtos: ~8 rows (aproximadamente)
INSERT INTO `produtos` (`id`, `nome`, `descricao`, `valor`, `fk_fornecedora`, `created_at`, `updated_at`) VALUES
	(2, 'Nestlé meio amargo 45% cacau', 'Chocolate meio amargo, 100g', 6.99, 1, '2023-12-16 14:57:34', '2023-12-16 14:57:34'),
	(3, 'Caixa de bombom Lacta', 'Caixa de bombom Lactea, edição favoritos com 15 chocolates', 15.90, 3, '2023-12-16 14:57:34', '2023-12-16 14:57:34'),
	(4, 'Lindt caramelo', 'Chocolate suíço com lascas de caramelo, 150g', 15.99, 5, '2023-12-16 14:57:34', '2023-12-19 03:34:28'),
	(5, 'Chocolate 40% Cacau Neugebauer', 'Tablete Neugebauer Meio Amargo: cremoso, macio, derrete na boca e tem um gostinho inconfundível.', 4.00, 4, '2023-12-16 14:57:34', '2023-12-19 15:10:53'),
	(6, 'Cadbury ao leite com café', 'Chocolate ao leite inglês com café premium 3 Corações, 110g', 22.90, 5, '2023-12-16 14:57:34', '2023-12-16 14:57:34'),
	(8, 'Chocolate Dia Amendoim', 'Chocolate com pedações de amendoim moido', 6.49, 5, '2023-12-16 23:21:11', '2023-12-16 23:21:11'),
	(10, 'Chocolate Caramelo', 'chocolate com gotas de caramelo', 10.99, 2, '2023-12-17 14:05:42', '2023-12-19 15:19:21'),
	(11, 'Chocolate', 'Chocolate com pedações de amendoim moido', 15.59, 2, '2023-12-17 14:35:39', '2023-12-19 02:28:52');

-- Copiando estrutura para tabela testeastrus.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela testeastrus.users: ~11 rows (aproximadamente)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Dexter Kirlin', 'aschroeder@example.net', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'yvDptTnNFU', '2023-12-15 15:36:47', '2023-12-15 15:36:47'),
	(2, 'Mrs. Carlee Ullrich V', 'yessenia.lockman@example.net', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'B49IjGkwVx', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(3, 'Prof. Carmel Botsford IV', 'lea.huels@example.org', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'xyCrnEClVq', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(4, 'Estrella Deckow', 'mitchell.halvorson@example.net', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'k3XOYtm0OD', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(5, 'Nedra Gleason', 'loy.spinka@example.com', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'JKc7sQ1mK2', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(6, 'Marvin Weber', 'ansel.barton@example.net', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'oJTRIVtFSO', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(7, 'Prof. Antwan Morar MD', 'mortimer.dubuque@example.org', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'p8AxYJAmxt', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(8, 'Alfred Gorczany II', 'bergstrom.kenneth@example.net', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'CBbVWkhIJ8', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(9, 'Ahmad Murazik', 'sipes.kyleigh@example.org', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'Ie0pCArMLf', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(10, 'Dr. Torrey Borer I', 'hagenes.alvis@example.org', '2023-12-15 15:36:47', '$2y$12$vjKvPPMlQg7nIcVqE5nJmeWvIR74/qq8hVqmN.4aPpdhHJYtpSpMG', 'dQOXkmrWV5', '2023-12-15 15:36:48', '2023-12-15 15:36:48'),
	(11, 'admin', 'ruecker.maymie@example.org', '2023-12-15 15:36:48', '$2y$12$380J74gjZUza3L6vDpvkw.CYkpOj8fUX4C1sEZYraoVQHH8rtnKeO', 'msB8AGmfGc', '2023-12-15 15:36:48', '2023-12-15 15:36:48');

-- Copiando estrutura para tabela testeastrus.valortotals
CREATE TABLE IF NOT EXISTS `valortotals` (
  `valorTotal` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela testeastrus.valortotals: ~0 rows (aproximadamente)
INSERT INTO `valortotals` (`valorTotal`) VALUES
	(98.85);

-- Copiando estrutura para trigger testeastrus.create_valorTotal
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `create_valorTotal` AFTER INSERT ON `produtos` FOR EACH ROW BEGIN
  UPDATE valortotals
  SET valorTotal = (
   SELECT SUM(valor) FROM produtos
  );
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger testeastrus.delete_valorTotal
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `delete_valorTotal` AFTER DELETE ON `produtos` FOR EACH ROW BEGIN
  UPDATE valortotals
  SET valorTotal = (
   SELECT SUM(valor) FROM produtos
  );
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para trigger testeastrus.update_valorTotal
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `update_valorTotal` AFTER UPDATE ON `produtos` FOR EACH ROW BEGIN
  UPDATE valortotals
  SET valorTotal = (
   SELECT SUM(valor) FROM produtos
  );
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Copiando estrutura para view testeastrus.info_produtos
-- Removendo tabela temporária e criando a estrutura VIEW final
DROP TABLE IF EXISTS `info_produtos`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `info_produtos` AS select `produtos`.`id` AS `id`,`produtos`.`nome` AS `nome`,`produtos`.`descricao` AS `descricao`,`fornecedoras`.`nome` AS `fornecedora`,`produtos`.`valor` AS `valor` from (`produtos` join `fornecedoras` on((`produtos`.`fk_fornecedora` = `fornecedoras`.`id`))) order by `produtos`.`id`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
