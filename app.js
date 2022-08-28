//import packages & files
const inquirer = require("inquirer")
const { getDepartments } = require("./operations/department")

//Main function & initial prompt

function main(){
    return inquirer.prompt([
        {
            message: "What would you like to do? ",
            type: 'list',
            name: 'operation',
            choices: [
                "View all departments",
                "Add department",
                "View all roles",
                "View all employees",
                "Add a role",
                "Add an employee",
                "Edit an employee",
                "Delete an entry",
                "Exit application",
    
            ]
        },
        { // Prompts to create a new department
            message: "What is the department name?",
            type: "input",
            name: "department_name",
            when: (ans) => ans.operation === 'Add department',
          }
    
    ]).then(async(ans) => {
        switch (ans.operation){
            //when user selects this > call view all department function > imported from department.js
            case "Add department":
                const department = await addDepartment(ans.department_name); //this will be an array of departments
                break;

            
            case "View all departments":
                const departments = await getDepartments(); //this will be an array of departments
                console.table(departments);
                break;
    
            case "view all roles":
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

