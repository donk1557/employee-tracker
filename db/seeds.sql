INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering");

INSERT INTO positions (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 4),
       ("Software Engineer", 120000, 4),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 2),
       ("Lawyer", 190000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", 1, null),
       ("Amira", "Afzal", 2, 1),
       ("Seymour", "Butz", 3, null),
       ("Veronica", "Rodriguez", 4, 3),
       ("Igor", "Ivanov", 5, null),
       ("Tom", "Vasel", 6, 5),
       ("Richard", "Ham", 7, null),
       ("Sarah", "Brown", 8, 7);
