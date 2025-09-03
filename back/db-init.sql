CREATE TABLE `team`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(16) NOT NULL UNIQUE,
    `color` VARCHAR(16) NOT NULL
);

CREATE TABLE `slot`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value` VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE `room`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `value` VARCHAR(16) NOT NULL UNIQUE
);

CREATE TABLE `challenge`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(64) NOT NULL UNIQUE,
    `description` TEXT NULL,
    `points` BIGINT NOT NULL,
    `max_done` BIGINT NOT NULL DEFAULT 1
);

CREATE TABLE `team_done_challenge`(
    `team_id` BIGINT UNSIGNED NOT NULL,
    `challenge_id` BIGINT UNSIGNED NOT NULL,
    `done` BIGINT NOT NULL DEFAULT 0,
    PRIMARY KEY(`team_id`, `challenge_id`),
    FOREIGN KEY (`team_id`) REFERENCES `team`(`id`),
    FOREIGN KEY (`challenge_id`) REFERENCES `challenge`(`id`)
);

CREATE TABLE `activity`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(16) NOT NULL UNIQUE,
    `description` TEXT NULL
);

CREATE TABLE `entry`(
    `activity_id` BIGINT UNSIGNED NOT NULL,
    `team_id` BIGINT UNSIGNED NOT NULL,
    `team_num` BIGINT UNSIGNED NOT NULL,
    `room_id` BIGINT UNSIGNED NOT NULL,
    `slot_id` BIGINT UNSIGNED NOT NULL,
    `points` BIGINT NOT NULL,
    `bonus` BIGINT NOT NULL DEFAULT 0,
    `comment` TEXT NULL,
    PRIMARY KEY(`activity_id`, `team_id`, `team_num`),
    FOREIGN KEY (`activity_id`) REFERENCES `activity`(`id`),
    FOREIGN KEY (`team_id`) REFERENCES `team`(`id`),
    FOREIGN KEY (`room_id`) REFERENCES `room`(`id`),
    FOREIGN KEY (`slot_id`) REFERENCES `slot`(`id`)
);

INSERT INTO `team` (`name`, `color`)
VALUES
('Romains', 'yellow'),
('Cro-Magnons', 'green'),
('Moyen Âge', 'blue'),
('Révolution Indus', 'red');

INSERT INTO `room` (`value`)
VALUES
('620-A100'), ('620-A101'), ('620-A102'), ('620-A103'), ('620-A104'), ('620-A105'),
('620-A200'), ('620-A201'), ('620-A202'), ('620-A203'), ('620-A204'), ('620-A205'),
('620-B120'), ('620-B115'), ('620-AMPHI'),
('ext-CROUS'), ('ext-Entrée'), ('ext-Place'), ('ext-Arrière');

INSERT INTO `slot` (`value`)
VALUES
('14h00-14h10'), ('14h10-14h20'), ('14h20-14h30'), ('14h30-14h40'), ('14h40-14h50'), ('14h50-15h00'),
('15h00-15h10'), ('15h10-15h20'), ('15h20-15h30'), ('15h30-15h40'), ('15h40-15h50'), ('15h50-16h00'),
('16h00-16h10'), ('16h10-16h20'), ('16h20-16h30'), ('16h30-16h40'), ('16h40-16h50'), ('16h50-17h00'),
('17h00-17h10'), ('17h10-17h20'), ('17h20-17h30'), ('17h30-17h40'), ('17h40-17h50'), ('17h50-18h00');

INSERT INTO `challenge` (`title`, `description`, `points`, `max_done`)
VALUES
('Challenge 1', 'No description', 50, 3),
('Challenge 2', 'No description', 500, 1),
('Challenge 3', 'No description', 10, 5),
('Challenge 4', 'No description', 100, 1),
('Challenge 5', 'No description', 150, 2),
('Challenge 6', 'No description', 200, 1),
('Challenge 7', 'No description', 50, 3);

INSERT INTO `activity` (`title`, `description`)
VALUES
('AMF', 'Disponible Mercredi à 13h00'),
('BDC', 'Disponible Mercredi à 13h00'),
('BDE', 'Disponible Mercredi à 13h00'),
('BDS', 'Disponible Mercredi à 13h00'),
('CIA', 'Disponible Mercredi à 13h00'),
('CinéFips', 'Disponible Mercredi à 13h00'),
('DDRS', 'Disponible Mercredi à 13h00'),
('Kfet', 'Disponible Mercredi à 13h00'),
('PolyBot', 'Disponible Mercredi à 13h00'),
('PolyChrome', 'Disponible Mercredi à 13h00'),
('PomPom', 'Disponible Mercredi à 13h00'),
('PopsGame', 'Disponible Mercredi à 13h00'),
('SDPS', 'Disponible Mercredi à 13h00'),
('ZikiFips', 'Disponible Mercredi à 13h00');
