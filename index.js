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
    
    break;
    case "Update Employee Role":
    
    break;
    case "View All Roles":
    Server.showPos();
    break;
    case "Add Role":
    
    break;
    case "View All Departments":
    Server.showDept();
    menuLoop();
    break;
    case "Add Department":
    
    break;
    default:
    return;
  }
}
  )};

  menuLoop();