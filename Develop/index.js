// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GithubUsername',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ["MIT", "ISC", "Apache", "none"]
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
      }, 
];
const promptUser = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('README.md', data, (error) =>
    error ? console.log('Error!') : console.log('Success!'));
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md!!!'))
      .catch((err) => console.error(err));
}

// Function call to initialize app
init();
