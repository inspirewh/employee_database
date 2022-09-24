USE db_employee_cms;

INSERT INTO departments (name) 
VALUES 
('Marketing'),
('HR'),
('Finance'),
('Sales'),
('IT');

INSERT INTO roles (title, salary, department_id) 
VALUES 
('Software Engineer', '110000', 5),
('Full-Stack Developer', '110000', 5),
('Digital Content Marketer', '60000', 1),
('Sales Consultant', '60000', 4),
('Accountant', '65000', 3),
('Sales Associate', '80000', 4),
('Finance Analyst', '80000', 3),
('Human Resources Coordinator', '80000', 2),
('Human Resources Assistant', '65000', 2),
('Marketing Manager', '65000', 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, NULL),
('Michelle', 'Williams', 2, NULL),
('Steve', 'Watts', 3, NULL),
('Ryan', 'Jefferson', 4, NULL),
('Jessica', 'James', 5, 1),
('Linda', 'Wood', 6, 2),
('Roger', 'Doe', 7, 3),
('Darren', 'Ryan', 8, 4);