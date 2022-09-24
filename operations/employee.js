
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
    const inputs = [firstName, lastName, roleID, managerID];
    await db.query(
      "INSERT INTO `db_employee_cms`.`employees` (`first_name`, `last_name`, `role_id`,`manager_id`) VALUES (?,?,?,?)",
      inputs
    );
  }

  // Delete Employee in the DB by ID
async function deleteEmployee(employeeID) {
    const db = await connect();
    const deleteQuery = "DELETE FROM `db_employee_cms`.`employees` WHERE id = ?";
    await db.query(deleteQuery, employeeID)
}


module.exports = {
    getEmployees,
    addEmployee,
    deleteEmployee,
}