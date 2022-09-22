const { connect } = require("../db/connection");

//generate list of current employees
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
      "INSERT INTO `company_db`.`employees` (`first_name`, `last_name`, `role_id`,`manager_id`) VALUES (?,?,?,?)",
      inputs
    );
  }


module.exports = {
    getEmployees,
    addEmployee,
}