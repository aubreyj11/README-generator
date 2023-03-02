const inquirer = require('Inquirer');
const fs =  require('fs');

const content = ({name, title, description, installation, usage, license, contributing, tests, username, email }) => {
    return `
# ${title}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
#### ${name}
   
    
## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 - [License](#license)
    
   
## Description
 ${description}
 
    
## Installation
 ${installation}
    
    
## Usage
 ${usage}
 <br>
 Link to walkthrough video: https://drive.google.com/file/d/1yVNiPjVpQWNbLDz1phdBM_dch0QleptM/view  
    
## Contributing
 ${contributing}
    
    
## Tests
 ${tests}

    
## Questions
Here is my Github username and email. Feel free to reach out with questions!
<br>
 Github: <a href="https://github.com/${username}">${username}</a>
 <br>
 Email: ${email}
    
    
    
## License
 ${license}`
};

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for using your project?'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the guidelines for contributing to this project? (if any)'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests and solutions for this project.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
    .then((data) => {
        fs.writeFile('README.md', content(data), (err) => 
            err ? console.log(err) : console.log("Success!")
    )});









// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
