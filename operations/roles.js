const { connect } = require("../db/connection")


async function getRoles() {
    const db = await connect();
    const [roles] = await db.query("SELECT * FROM roles");
    return roles;
}


async function addRole(title, salary, department_id) {
    const db = await connect();
    const inputs = [title, salary, department_id];
    await db.query(
      "INSERT INTO `company_db`.`roles` (`title`, `salary`, `department_id`) VALUES (?,?,?)",
      inputs
    );
  }


module.exports = {
    addRole,
    getRoles,
}