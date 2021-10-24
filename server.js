const express = require('express');
const mysql = require('mysql2');
const menuLoop = require('./index');
const menu = require('./index');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root123Root',
    database: 'dept_db'
  },
  console.log(`Connected to the dept_db database.`)
);

function showDept () {
db.query('SELECT * FROM departments', function (err, results) {
    console.table(results);
    menu;
  });
}

function showPos () {
db.query('SELECT positions.id, positions.title, positions.salary, departments.dept_name FROM positions LEFT JOIN departments ON positions.department_id = departments.id', function (err, results) {
    console.table(results);
    menu;
    });

}

function showEmp () {
  db.query(`SELECT a.id, CONCAT(a.first_name, ' ', a.last_name) AS employee, positions.title, positions.salary, departments.dept_name, CONCAT(b.first_name, ' ', b.last_name) AS manager FROM employees a LEFT JOIN positions ON a.role_id = positions.id LEFT JOIN departments ON positions.department_id = departments.id LEFT JOIN employees b ON a.manager_id = b.role_id`, function (err, results){
    console.table(results);
    menu;
  });
}   
  
  

function addDept (data) {
  db.query('INSERT INTO departments (dept_name) VALUES (?)', data, function (err, results) {
    showDept();
    
  });
}

function addRole (data) {
  const depId = {Sales: 1, Legal: 2, Finance: 3, Engineering: 4};
  const departmentIdNum = depId[data.depo];
  db.query('INSERT INTO positions (title, salary, department_id) VALUES (?, ?, ?)', [data.Name, data.amount, departmentIdNum] , function (err, results){
    showPos();
  });

}

function addEmp (data) {
  db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [data.firstName, data.lastName, data.role, data.mId], function (err, results){
    showEmp();
  });

}

function altEmp (data) {
  db.query(`UPDATE employees SET role_id = ? WHERE employees.first_name = ? AND employees.last_name = ?`, [data.role, data.firstName, data.lastName], function (err, results){
    console.log(results);
    showEmp();
  });
}



app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  menu;

  module.exports = {
      showDept,
      showPos,
      showEmp,
      addDept, 
      addRole,
      addEmp,
      altEmp,
      
  }