SET NAMES "utf8";
DROP DATABASE IF EXISTS `todolist_database`;
CREATE DATABASE IF NOT EXISTS `todolist_database` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `todolist_database`;

CREATE TABLE IF NOT EXISTS todo(
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	task CHAR(128) NOT NULL,
	_date CHAR(11) NOT NULL,
	done BOOLEAN DEFAULT false
) ENGINE=INNODB CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO todo(task, _date) VALUES
("Help the neighboors", "13-09-2020"),
("Clean the whole house", "13-09-2020"),
("Prepare the lunch", "13-09-2020"),
("Do some aerobic training", "13-09-2020"),
("Help kids with homework", "13-09-2020"),
("Go to the dentist", "14-09-2020");