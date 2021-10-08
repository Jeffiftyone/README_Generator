// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'userName',
        message:'What is your GitHub username?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your e-mail address?'
    },
    {
        type:'input',
        name:'projName',
        message:"What is your project's name?"
    },
    {
        type:'input',
        name:'desc',
        message:'Please write a short description of your project'
    },
    {
        type:'checkbox',
        message:'What kind of license should your project have?',
        default:'(Use arrow keys)',
        name:'license',
        choices:['MIT','Apache-2.0','GPL-3.0','BSD-3','None']

    },
    {
        type:'input',
        name:'installCommand',
        message:'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type:'input',
        name:'testCommand',
        message:'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo?',
        name:'usingApp'
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo?',
        name:'contributeRepo'
    }
];

// TODO: Create a function to write README file
const generateReadme = (data)=>
`# ${data.projName}
=============================

## Description
${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
        
        ${data.installCommand}

## Usage
${data.usingApp}

## License
This project is licensed under the ${data.license} license.

## Contributing 
${data.contributeRepo}

## Tests
To run tests, run the following command:

        ${data.testCommand}

## Questions
If you have any queations regarding the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).
You can find more of my work at [${data.userName}](https://github.com/${data.userName})
`
;
// TODO: Create a function to initialize app
function init() {
    const q=[...questions]
    inquirer.prompt(q)
    .then((data) => {
        const readmeContent=generateReadme(data);
        
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
        );
    });
}

// Function call to initialize app
init();
