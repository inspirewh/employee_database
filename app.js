//import packages & files
const inquirer = require("inquirer")
const { getDepartments, addDepartment } = require("./operations/department")
const { getRoles, addRole } = require("./operations/roles")
const { addEmployee, getEmployees} = require("./operations/employee");

//Main function & initial prompt

function main(){
    return inquirer.prompt([
        {
            message: "What would you like to do? ",
            type: 'list',
            name: 'operations',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee Role", //once user selected this, should see a list of employee name to choose from, select a new role
                "Exit application",
    
            ]
        },
    ])
    .then(async(ans) => {
        switch (ans.operations){
            //when user selects this > call view all department function > imported from department.js
            case "View all departments":
                console.table(await getDepartments());//this will show be a table of departments
                break;
                
            case "View all roles":
                console.table(await getRoles());//this will show be a table of roles
                break;
            
            case "View all employees":
                console.table(await getEmployees());//this will show be a table of employees
                break;

            case "Add a department":
                newDepartment();
                break;
                    
            case "Add a role":
                addRole(); 
                break;

            case "Add an Employee":
                newEmployee(); 
                break;

            case "Exit application":
                process.exit(0);
        }

        await main();

    })


}


// function to create a new department
function newDepartment() {
    inquirer
      .prompt([
        {
          message: "What is the department name?",
          type: "input",
          name: "department_name",
        },
      ])
      // Once the inputs are complete, call the add department function & pass the necessary data
      .then(async (ans) => {
        await addDepartment(ans.department_name);
        console.table(await getDepartments());
        main();
      });
  }

  // Function to add a new employee
async function newEmployee() {

    // Get list of roles & make inquirer choices array
    const roles = await getRoles();
    const roleChoices = [];
  
    roles.forEach((role) => {
      let qObj = {
        name: role.title,
        value: role.id,
      };
      roleChoices.push(qObj);
    });
  
    // Current employee list so that a manager can be chosen
    const employees = await getEmployees();
    const managerChoices = [];
  
    employees.forEach((emp) => {
      let qObj = {
        name: emp.first_name + " " + emp.last_name,
        value: emp.id,
      };
      managerChoices.push(qObj);
    });
  
    inquirer
      .prompt([
        {
          message: "First name: ",
          type: "input",
          name: "first_name",
        },
        {
          message: "Last name: ",
          type: "input",
          name: "last_name",
        },
        {
          message: "Role: ",
          type: "list",
          name: "role_id",
          choices: roleChoices,
        },
        {
          message: "Does this employee have a manager?",
          type: "confirm",
          name: "manager",
        },
        {
          message: "Please select their manager",
          type: "list",
          name: "manager_id",
          choices: managerChoices,
          when: (ans) => ans.manager,
        },
      ])
      // Pass all the data to the add employee function & display the updated table
      .then(async (ans) => {
        await addEmployee(
          ans.first_name,
          ans.last_name,
          ans.role_id,
          ans.manager_id
        );
        console.table(await getEmployees());
        main();
      });
  }
  

main();



// goal: create a CLI to manage employees

//view all departments
//when you select "view all departments" need to import the department functions

//view all roles
//view all employees
//add department

//add a role, add an employee and update an emplpoyee

