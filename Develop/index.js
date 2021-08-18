// TODO: Include packages needed for this application
const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Application title?"
    },
    
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application."
    },
    
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process"
    },
    
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },
    
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    
    {
        type: "input",
        name: "test",
        message: "What is the process used to test this application?"
    },
    
    {
        type: "list",
            message: "what license are you using? ",
            name: "license",
            choices: ["None", "ISC", "MIT", "Mozilla", "WTFPL"]
    },
    
    {
        type: "input",
        name: "username",
        message: "Enter your Github username"
    },
    
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    },
    
        
    ];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("Look at your spiffy new README!")    
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        
        const markdownString = generateMarkdown(userInput)
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('generated README')
            }
        })
    },

    err => {
        console.log(`Oops! You need to fill out the form completely.`);

    })
};

// Function call to initialize app
init();




