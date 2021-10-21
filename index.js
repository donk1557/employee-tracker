const inquire = require("inquirer");
const Server = require("./server");

function menuLoop () {
const menu = inquire
.prompt([
  {
    type: "list",
    message: "What would you like to do?",
    name: "option",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      new inquire.Separator(),
      "View All Roles",
      "Add Role",
      new inquire.Separator(),
      "View All Departments",
      "Add Department",
      new inquire.Separator(),
      "Quit",
      new inquire.Separator(),

    ],
  },
]).then((data) => {
  switch (data.option) {
    case "View All Employees":
     
    break;
    case "Add Employee":
    questionEmployee();
    break;
    case "Update Employee Role":
    questionAlt();
    break;
    case "View All Roles":
    Server.showPos();
    setTimeout(() => {menuLoop()}, 1000);
    break;
    case "Add Role":
    questionRole();
    break;
    case "View All Departments":
    Server.showDept();
    setTimeout(() => {menuLoop()}, 1000);
    break;
    case "Add Department":
    questionDept();
    setTimeout(() => {menuLoop()}, 1000);
    break;
    default:
    return '';
  }
}
  )};

  function questionDept () {
    const menu = inquire
.prompt([
  {
    type: "input",
    message: "What is the name of the department?",
    name: "Name",
  },
]).then((data) => {
  console.log(data.Name);
  Server.addDept(data.Name);
})}

  function questionRole () {
    const menu = inquire
.prompt([
  {
    type: "input",
    message: "What is the name of the role?",
    name: "Name",
  },
  {
    type: "input",
    message: "How much is the salary?",
    name: "amount",
  },
  {
    type: "input",
    message: "Which department does it belong?",
    name: "depo",

  },
]).then((data) => {
  console.log(data);
  // Server.addRole(data.Name);
})}

// function questionDept () {
//   const menu = inquire
// .prompt([
// {
//   type: "list",
//   message: "Select Employee:",
//   name: "worker",
//   choices: [SELECT employee_id FROM employees  ]
// },
// {
//   type: "list",
//   message: "Pick new role:",
//   name: "newjob",
//   choices: [SELECT title FROM roles]
// },
// ]).then((data) => {
// console.log(data.Name);
// Server.addDept(data.Name);
// })}
  

  menuLoop();

module.exports = menuLoop;