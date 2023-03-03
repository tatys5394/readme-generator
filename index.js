// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// DATA
// TODO: Create an array of questions for user input
// /* Pass your questions in here */
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

const questions = [
  // title
  {
    type: "input",
    message: "What title would you like to use for your Repository?",
    name: "title",
  },
  // description
  {
    type: "input",
    message: "Provide a description of your application",
    name: "description",
  },
  // installation instructions
  {
    type: "input",
    message: "Provide a list of installation instructions",
    name: "installation",
  },
  // usage information
  {
    type: "input",
    message: "Provide a list of instructions on how to use your application",
    name: "usage",
  },
  // contribution guidelines
  {
    type: "input",
    message: "If other developers wanted to contribute to your project, how can they do that? (provide detailed instructions)",
    name: "contribution",
  },
  // test instructions
  {
    type: "input",
    message: "How can other users test out your application?",
    name: "test",
  },

  {
    type: "list",
    message: "What license do you have?",
    choices: [ "MIT", new inquirer.Separator(), "Mozilla_2.0", new inquirer.Separator(), "ISC"],
    name: "license",
  },

  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your email?",
    name: "email",
  }
];

// FUNCTIONS
// TODO: Create a function to write README file
function generateMarkdown(answers) {
  
//   const badges = licenseOptions() {"The MIT License", "Mozilla Public License 2.0", "ISC License (ISC)";
// };

  const markdown = `# ${answers.title}

## Description

${answers.description}

## Table of Contents


## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.contribution}

## License

![GitHub license](https://img.shields.io/badge/License-${answers.license}-blue.svg)


## Questions 

Username: https://github.com/${answers.username} \n

Email: ${answers.email}

## Features

list of features

## How to Contribute

contributing instructions

## Tests
${answers.test}`
  console.log(markdown);
  return markdown;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,(err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// USER INTERACTION
inquirer
  .prompt([...questions])
  .then((answers) => {
    // console.log(answers);
    // generate some markdown with our answers

    const markdown = generateMarkdown(answers);
    console.log("this should be markdown:", markdown);
    writeToFile("README.md",markdown)

    // Use user feedback for... whatever!!
  })
  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// INITIALIZATION
