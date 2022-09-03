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
        message: 'Enter install instructions: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions: ',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter github user name: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email: ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: [
        '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
        'Apache License 2.0',
        'GNU General Public License',
        'MIT License',
        'BSD 2-Clause "Simplified"',
        'BSD 3-Clause "New" or "Revised" License', 
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0', 
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0', 
        'The Unlicense'],
      },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFileSync(fileName, answers)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)



  // .then(result => gen.renderLicenseBadge(result)) 
    // .then(function (answers) { return gen.renderLicenseBadge(answers) })
    .then(answers => writeToFile('read.md', gen.generateMD(answers)))
    

    .then(() => console.log('Successfully wrote to read.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
