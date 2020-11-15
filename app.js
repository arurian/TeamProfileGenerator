const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const teamMembers = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
 engineer = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Engineer's Name: ",
            type: "input",
        },
        {
            name: "id",
            message: "Engineer's Employee's ID Number: ",
            type: "number",
        },
        {
            name: "email",
            message: "Egineer's Email Address: ",
            type: "input"
        },
        {
            name: "github",
            message: "Engineer's github username: ",
            type: "input",
        },
        ]) .then( data => {
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                teamMembers.push(engineer);
                console.log("The engineer has been added successfully");
                // need to activate the array here
                selectTeamMember();
});
}


intern = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Intern's Name: ",
            type: "input",
        },
        {
            name: "id",
            message: "Intern's Employee's ID Number (must be a Number Input): ",
            type: "number",
        },
        {
            name: "email",
            message: "Intern's Email Address: ",
            type: "input"
        },
        {
            name: "school",
            message: "Intern's school's name: ",
             type: "input",
        },
        ]) .then( data => {
                let interns = new Intern(data.name, data.id, data.email, data.school);
                teamMembers.push(interns);
                console.log("The intern has been added successfully");
                // need to activate the array here
                selectTeamMember();
});
}

manager = () => {
    inquirer.prompt([
        {
            name: "name",
            message: " Name : ",
            type: "input",
        },
        {
            name: "id",
            message: "Your employee's ID Number (must be a Number Input): ",
            type: "number",
        },
        {
            name: "email",
            message: "Email Address: ",
            type: "input"
        },
        {
            name: "officeNumber",
            message: "Your office number: ",
            type: "number",
        },
        ]) .then( data => {
                let manager = new Manager(data.name, data.id, data.email,data.officeNumber);
                teamMembers.push(manager);
                console.log("The manager has been added successfully");
                // need to activate the array here
                selectTeamMember();
});
}
 let addTeamMembers = 
    {
        name: "addMember",
        message: "Add a team member: ",
        type: "list",
        choices: ['Manager','Engineer','Intern','Finished']
    }

function selectTeamMember ()  {
    inquirer.prompt(addTeamMembers).then((answer)=>{
        //if the user choose Egineer from prompt
     if (answer.addMember === "Engineer"){
         //enginer() function will be called
                engineer();
            } else if (answer.addMember === "Intern") {
                intern();

            } else if (answer.addMember === "Manager") {
                manager();

            } else if (answer.addMember === "Finished") {
                console.log("Finished")
               /*  for writing the file */
                const OUTPUT_DIR = path.resolve(__dirname, "output");
                const outputPath = path.join(OUTPUT_DIR, "main.html");
                /* 
                writing the file */
                fs.writeFile(outputPath, render(teamMembers), function(err) {
                                if (err) {
                                console.log(err)
                                } else {
                                    console.log("Success! You can find main.html in the output directory/folder")
                                }
                            });

                         }
        })
     }
 
 

 selectTeamMember();  
