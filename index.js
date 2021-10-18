const inquire = require("inquirer");

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

    ],
  },
])