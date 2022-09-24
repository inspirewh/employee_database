//import packages & files
const inquirer = require("inquirer")
const { getDepartments, addDepartment } = require("./operations/department")
const { getRoles, addRole } = require("./operations/roles")
const { addEmployee, getEmployees, deleteEmployee} = require("./operations/employee");

//Main function & initial prompt

function main(){
    return inquirer.prompt([
        {
            message: "What would you like to do? ",
            type: 'list',
            name: 'operation',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add department",
                "Add a role",
                "Add an employee",
                "Update an employee Role", //once user selected this, should see a list of employee name to choose from, select a new role
                "Exit application",
    
            ]
        },
        
        { // Prompts to create a new department
            message: "What is the department name?",
            type: "input",
            name: "department_name",
            when: (ans) => ans.operation === 'Add department',
          },
          { // prompts to create a new role
            message: "What is the title of the role?",
            type: "input",
            name: "role.title",
            when: (ans) => ans.operation === 'Add an employee',
          }

    ]).then(async(ans) => {
        switch (ans.operation){
            //when user selects this > call view all department function > imported from department.js
            case "View all departments":
                console.table(await getDepartments());//this will show be a table of departments
                main();
                break;
                
            case "View all roles":
                console.table(await getRoles());//this will show be a table of roles
                main();
                break;
            
            case "View all employees":
                console.table(await getEmployees());//this will show be a table of employees
                main();
                break;

            case "Add department":
                const department = await addDepartment(ans.department_name); 
                console.table(department);
                break;
                    
            case "Add a role":
                addRole(); 
                break;

            case "Add an Employee":
                addEmployee(); 
                break;

            case "Exit application":
                process.exit(0);
        }

        await main();

    })


}

main();



// goal: create a CLI to manage employees

//view all departments
//when you select "view all departments" need to import the department functions

//view all roles
//view all employees
//add department

//add a role, add an employee and update an emplpoyee

