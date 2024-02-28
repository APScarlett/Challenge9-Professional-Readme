// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer= require("inquirer")
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message:"What is your projects title?",
        name:'title',
}, {
    type:'list',
    message:"Which Liscense are you using?",
    name: 'liscense',
    choices:["MIT","Apache","IBM","No liscense"]
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md" ,data)
    })
}

// Function call to initialize app
init();
