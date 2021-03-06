const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const emptyObject = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// repeat this for Engineer and Intern
 function managerFunction() {
     
    inquirer.prompt([
    
    {
    type: "input",
    name:"managerName",
    message: "What is your name?"},

    {
    type: "input",
    name:"managerID",
    message: "What is your employee ID?"},
   
    {
    type: "input",
    name:"managerEmail",
    message: "What is your email?"
    
    },
    {
        type: "input",
        name:"managerNumber",
        message: "What is your office number?"
    }
    ])
    
    .then(userDecision => {
     // we need to first crate class instance
     const manager= new Manager(userDecision.managerName, userDecision.managerID, userDecision.managerEmail, userDecision.managerNumber);
     // push it to a storage array
     emptyObject.push(manager);
     console.log(emptyObject);
     // execute teamFunction
    teamFunction()
})
}

function teamFunction() {
    
    inquirer.prompt({
    type: "input",
    name: "eori",
    message: "Do you want to add an Engineer or Intern or Stop?"
}).then(userDecision => {
    // branches off into two potiential functions
    switch (userDecision.eori){
        case "Engineer":
        return engineerFunction()
        // make this function
        
        case "Intern":
        return internFunction()
        // function

        case "Stop":
        return stopFunction()

    }


})
}

function engineerFunction(){
    inquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        message: "What is your name?"
        },
        {
        type: "input",
        name: "engineerID",
        message: "What is your employee ID?"
        },
        {
        type: "input",
        name: "engineerEmail",
        message: "What is your email?"
        },
        {
        type: "input",
        name: "engineerGitHub",
        message: "What is your GitHub username?"
        },
    ])
    .then(userDecision => {
        // we need to first crate class instance
        const engineer= new Engineer(userDecision.engineerName, userDecision.engineerID, userDecision.engineerEmail, userDecision.engineerGitHub);
        // push it to a storage array
        emptyObject.push(engineer);
        // execute teamFunction
       teamFunction()
    })
}

function internFunction(){
    inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "What is your name?"
        },
        {
        type: "input",
        name: "internID",
        message: "What is your employee ID?"
        },
        {
        type: "input",
        name: "internEmail",
        message: "What is your email?"
        },
        {
        type: "input",
        name: "internSchool",
        message: "What school did you attend?"
        },
    ])
    .then(userDecision => {
        // we need to first crate class instance
        const intern= new Intern(userDecision.internName, userDecision.internID, userDecision.internEmail, userDecision.internSchool);
        // push it to a storage array
        emptyObject.push(intern);
        // execute teamFunction
       teamFunction()
    })
}

function stopFunction() {
    // html rendering
    console.log(emptyObject);
    fs.writeFileSync(outputPath, render(emptyObject), "utf-8");

}


managerFunction()
// teamFunction()

// manager function first
// ask spicifically if they want to have an intern or engeineer (yes or no)
    // inside of then -- create two functions that handles their response

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
