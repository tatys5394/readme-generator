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
    message: "What title would you like to use for your README?",
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
  
];

// FUNCTIONS
// TODO: Create a function to write README file
function generateMarkdown(answers) {
  const markdown = `# ${answers.title} `
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
