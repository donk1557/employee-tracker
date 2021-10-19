const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

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
db.query('SELECT id, title, salary, dept_name FROM positions INNER JOIN departments USING (id)', function (err, results) {
    console.table(results);
    });

}



app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  module.exports = {
      showDept,
      showPos,
  }