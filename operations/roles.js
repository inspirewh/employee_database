const { connect } = require("../db/connection")


//function to generate list of all roles
async function getRoles() {
    const db = await connect();
    const [roles] = await db.query("SELECT * FROM roles");
    return roles;
  }

  async function addRole(title, salary, department_id) {
    const db = await connect();
    const inputs = [title, salary, department_id];
    await db.query(
      "INSERT INTO `db_employee_cms`.`roles` (`title`, `salary`, `department_id`) VALUES (?,?,?)",
      inputs
    );
  }

module.exports = {
    getRoles,
    addRole,
}