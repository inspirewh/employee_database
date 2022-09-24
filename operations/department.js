const { connect } = require("../db/connection")


//function to generate list of current departments
async function getDepartments() {
    const db = await connect();
    const [departments] = await db.query("SELECT * FROM departments");
    return departments;
  }

//function to add a department
async function addDepartment(name){
    const db = await connect();
    await db.query('INSERT INTO `db_employee_cms`.`departments` (`name`) VALUES (?)', name);
}


module.exports = {
    getDepartments,
    addDepartment,
}