INSERT INTO roles (`id`, `title`, `salary`, `department_id`) 
VALUES 
('1', 'Software Engineer', '110000', 5),
('2', 'Full-Stack Developer', '110000', 5,)
('3', 'Digital Content Marketer', '60000', 1),
('4', 'Sales Consultant', '60000', 4),
('5', 'Accountant', '65000', 3),
('6', 'Sales Associate', '80000', 4),
('7', 'Finance Analyst', '80000', 3),
('8', 'Human Resources Coordinator', '180000', 2),
('9', 'Human Resources Assistant', '65000', 2),
('10', 'Marketing Manager', '65000', 1),

INSERT INTO employees (`id, first_name, last_name, roles_id, manager_id`)
VALUES
(001, "John", "Smith", 001, NULL),
(002, "Michelle", "Williams", 002, NULL),
(003, "Steve", "Watts", 003, NULL),
(004, "Ryan", "Jefferson", 004, NULL),
(005, "Jessica", "James", 005, 001),
(006, "Linda", "Wood", 006, 002),
(007, "Roger", "Doe", 007, 003),
(008, "Darren", "Ryan", 008, 004);

