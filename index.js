const inquirer = require('inquirer');
const fs = require('fs');
function generatebadge (badge){
    if (badge === 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (badge === 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    }
    if (badge === 'IBM public license'){
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`

    }
}


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Installation instruction',
      
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information',   
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Contribution guidelines', 
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions', 
    },
    {
        type: 'list',
      message: 'Choose your licenses',
      name: 'Licenses',
      choices: ['MIT', 'Apache', 'IBM public license'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'GitHub Username?', 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?', 
    }
  ])
  .then((data) => {
    const filename = `README.md`;
    const filecontent = `
# title
${data.title}

## description
${data.description}

## table of contents
* [Title](#title)
* [Description](#description)
* [Instructions](#instructions)
* [Usage](#Usage)
* [Guidlines](#guidelines)
* [Test](#test)
* [Licenses](#linceses)
* [Username](#username)
* [Email](#email)

## instructions
${data.instructions}

## usage
${data.usage}

## guidelines
${data.guidelines}

## test
${data.test}

## Licenses
${generatebadge(data.Licenses)}

## username
${data.username}

## email
${data.email}
    `

    fs.writeFile(filename, filecontent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });