DROP DATABASE IF EXISTS db_employee_cms;
CREATE DATABASE db_employee_cms;

USE db_employee_cms;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES departments (id)
  ON DELETE CASCADE
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  FOREIGN KEY (role_id) 
  REFERENCES roles(id)
  ON DELETE CASCADE,
  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
  ON DELETE CASCADE
);