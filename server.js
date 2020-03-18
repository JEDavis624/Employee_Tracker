var inquirer = require("inquirer");
var mysql = require("mysql");
var consoleTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "employee_trackerDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    firstPrompt();
  });

  function firstPrompt() {

  inquirer
  .prompt({
    type: "list",
    name: "task",
    message: "Would you like to do?",
    choices: [
      "View Employees",
      "View Departments",
      "View Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Role",
      "End"]
  })

  .then(function ({ task }) {
    switch (task) {
      case "View Employees":
        viewEmployee();
        break;
      case "View Departments":
        viewDepartments();
        break;
        case "View Roles":
        viewRoles();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Add Department":
        addDepartment();
        break;
        case "Add Role":
        addRole();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "End":
        connection.end();
        break;
    }
  });
}