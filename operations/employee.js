
const inquirer = require('inquirer');
const { connect } = require("../db/connection");

//function to generate list of current employees
async function getEmployees() {
    const db = await connect();
    const [employees] = await db.query("SELECT * FROM employees");
    return employees;
  }

// Add a new employee to the DB
async function addEmployee(firstName, lastName, roleID, managerID) {
    const db = await connect();
    // Array of inputs to protect from sql injection
    const inputs = [firstName, lastName, roleID, managerID];
    // Query the db with inputs
    await db.query(
      "INSERT INTO `company_db`.`employees` (`first_name`, `last_name`, `role_id`,`manager_id`) VALUES (?,?,?,?)",
      inputs
    );
  }




module.exports = {
    getEmployees,
    addEmployee,
}