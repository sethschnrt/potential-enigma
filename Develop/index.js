// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining what your motivation was, why you created this project, what problem(s) it solves, and what you learned from it.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If you would like other developers to contribute, provide guidelines for how to do so.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples on how to run them.',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Successfully wrote to ' + fileName);
});
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  })
  .catch((error) => {
    console.log(error);
  })
}

// Function call to initialize app
init();
