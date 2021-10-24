const inquire = require("inquirer");
const Server = require("./server");

function menuLoop() {
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
    ])
    .then((data) => {
      switch (data.option) {
        case "View All Employees":
          Server.showEmp();
          break;
        case "Add Employee":
          questionEmployee();
          break;
        case "Update Employee Role":
          questionAlt();
          break;
        case "View All Roles":
          Server.showPos();
          setTimeout(() => {
            menuLoop();
          }, 1000);
          break;
        case "Add Role":
          questionRole();
          break;
        case "View All Departments":
          Server.showDept();
          setTimeout(() => {
            menuLoop();
          }, 1000);
          break;
        case "Add Department":
          questionDept();
          setTimeout(() => {
            menuLoop();
          }, 1000);
          break;
        default:
          return console.log("Application terminated");
      }
    });
}

function questionDept() {
  const menu = inquire
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "Name",
      },
    ])
    .then((data) => {
      console.log(data.Name);
      Server.addDept(data.Name);
    });
}

function questionRole() {
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
    ])
    .then((data) => {

      Server.addRole(data);
    });
}

function questionEmployee () {
  const menu = inquire
.prompt([
{
  type: "input",
  message: "What is employee's first name?",
  name: "firstName",
},
{
  type: "input",
  message: "What is employee's last name?",
  name: "lastName",
},
{
  type: "input",
  message: "What is employee's role id?",
  name: "role",
},
{
  type: "input",
  message: "What is the employee's manager's id?",
  name: "mId",
},
]).then((data) => {
Server.addEmp(data);
})}

function questionAlt () {
  const menu = inquire
.prompt([
{
  type: "input",
  message: "What is employee's first name?",
  name: "firstName",
},
{
  type: "input",
  message: "What is employee's last name?",
  name: "lastName",
},
{
  type: "input",
  message: "What is employee's new position (type id)?",
  name: "role",
},
]).then((data) => {
  console.log(data.role, data.firstName, data.lastName);
  Server.altEmp(data);
})}

menuLoop();

module.exports = menuLoop;
