INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering");

INSERT INTO positions (title, salary, department_id)
VALUES ("Sales Lead", 100000, -),
       ("Salesperson", 80000, -),
       ("Lead Engineer", 150000, -),
       ("Software Engineer", 120000, -),
       ("Account Manager", 160000, -),
       ("Accountant", 125000, -),
       ("Legal Team Lead", 250000, -),
       ("Lawyer", 190000, -);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", false),
       ("Amira", "Afzal", true),
       ("Christoper", "Lee", true),
       ("Veronica", "Rodriguez", false),
       ("Igor", "Ivanov", true),
       ("Tom", "Vasel", true),
       ("Richard", "Ham", true),
       ("Sarah", "Brown", true),
