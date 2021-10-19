INSERT INTO departments (id, dept_name)
VALUES (1, "Sales"),
       (2, "Legal"),
       (3, "Finance"),
       (4, "Engineering");

INSERT INTO positions (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 4),
       (4, "Software Engineer", 120000, 4),
       (5, "Account Manager", 160000, 3),
       (6, "Accountant", 125000, 3),
       (7, "Legal Team Lead", 250000, 2),
       (8, "Lawyer", 190000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", 1, null),
       ("Amira", "Afzal", 2, 1),
       ("Seymour", "Butz", 3, null),
       ("Veronica", "Rodriguez", 4, 3),
       ("Igor", "Ivanov", 5, null),
       ("Tom", "Vasel", 6, 5),
       ("Richard", "Ham", 7, null),
       ("Sarah", "Brown", 8, 7);
