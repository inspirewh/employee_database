
const inquirer = require('inquirer');
const { connect } = require("../db/connection");

//function to generate list of current employees
async function getEmployees() {
    const db = await connect();
    const [employees] = await db.query("SELECT * FROM employees");
    return employees;
  }

// function to add a new employee to the database list
async function addEmployee(firstName, lastName, roleID, managerID) {
    const db = await connect();
    // Array of inputs to protect from sql injection
    const inputs = [firstName, lastName, roleID, managerID];
    // Query the database with inputs
    await db.query(
      "INSERT INTO `db_employee_cms`.`employees` (`first_name`, `last_name`, `role_id`,`manager_id`) VALUES (?,?,?,?)",
      inputs
    );
  }

  // Function to update/edit an existing employee
async function updateEmployee(firstName, lastName, roleID, managerID, employeeID) {
    const db = await connect();
    const nameChangeParam = [firstName, lastName, employeeID];
    const roleChangeParam = [roleID, employeeID];
    const managerChangeParam = [managerID, employeeID];
  
    const nameQueryString ="UPDATE employees SET `first_name` = ?, `last_name` = ? WHERE id = ?";
    const roleQueryString = "UPDATE employees SET `role_id` = ? WHERE id = ?";
    const managerQueryString = "UPDATE employees SET `manager_id` = ? WHERE id = ?";
  
    // If the function passed a name, run the name change query
    if (firstName) { await db.query(nameQueryString, nameChangeParam) };
    if (roleID) { await db.query(roleQueryString, roleChangeParam) };
    if (managerID) { await db.query(managerQueryString, managerChangeParam) };
  }




module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
}