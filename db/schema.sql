DROP DATABASE IF EXISTS `db_employee_cms` ;
CREATE SCHEMA `db_employee_cms` ;

use `db_employee_cms` ;

CREATE TABLE `departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE`roles` (
  `id` INT UNSIGNED NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `salary` DECIMAL NOT NULL,
  `department_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `roles` 
ADD INDEX `roles_1_fk_idx` (`department_id` ASC) VISIBLE;
;
ALTER TABLE `roles` 
ADD CONSTRAINT `roles_1_fk`
  FOREIGN KEY (`department_id`)
  REFERENCES `departments` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;

  CREATE TABLE`employees` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `manager_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `employees` 
ADD INDEX `employees_1_fk_idx` (`role_id` ASC) VISIBLE,
ADD INDEX `employees_2_fk_idx` (`manager_id` ASC) VISIBLE;
;
ALTER TABLE `employees` 
ADD CONSTRAINT `employees_1_fk`
  FOREIGN KEY (`role_id`)
  REFERENCES `roles` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `employees_2_fk`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employees` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;