// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions




// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Briefly describe the project:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'How does the user install the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Briefly describe the usage for the project:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How can this app be tested?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution guidelines?',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFileSync(fileName, answers)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('read.md', gen.generateMD(answers)))
    .then(() => console.log('Successfully wrote to read.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
