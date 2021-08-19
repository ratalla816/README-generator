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
        message: "Describe the installation process."
    },
    
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },

    {
        type: "input",
        name: "screenshot",
        message: "please enter relative path for your screenshot image."
    },

    {
        type: "input",
        name: "features",
        message: "What are the main features of the application?"
    },

    {
        type: "input",
        name: "acknowledgements",
        message: "Who contributed to this project?"
    },

    {
        type: "list",
        message: "what license are you using? ",
        name: "license",
        choices: ["GNU", "ISC", "MIT", "Mozilla", "WTFPL"]
    },
     
      
    {
        type: "input",
        name: "testing",
        message: "What is the process used to test this application?"
    },
    
  
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    },
    
        
    ];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("Oops! You need to fill out the form completely!")    
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
                console.log('Look at your spiffy new README!')
            }
        })
    },

    
   
    )}


init();




