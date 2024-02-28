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
        message:"Which license are you using?",
        name: 'license',
        choices:["MIT","Apache","IBM","No license"]
},{
        type: 'input',
        message:"Give a brief Description of the project.",
        name:'description',
},{
        type:'input',
        message:'Does this program require any installations? If so please list them',
        name:'installation',
},{     
        type:'input',
        message:'what was the goal of this project?',
        name:'usage'
},{
        type:'input',
        message:'Please list any contributors towards this project.',
        name:'contributors',
},{
        type:'input',
        message:'Please enter: node index.js to run tests ',
        name:'tests',
        default:'node index.js',
}
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   const content=generateMarkdown(data)
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Success!")
    })
}

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
