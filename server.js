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
    
  });
}

function showPos () {
db.query('SELECT * FROM positions LEFT JOIN departments ON positions.department_id = departments.id', function (err, results) {
    console.table(results);
  
    });

}

function addDept (data) {
  db.query('INSERT INTO departments (dept_name) VALUES (?)', data, function (err, results) {
    showDept();
    
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
      addDept, 
      
  }