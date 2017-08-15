'use strict';

const inquirer = require('inquirer');

async function prompt(inquiry) {
  const answers = await inquirer.prompt([Object.assign({name: 'zero'}, inquiry)]);
  return answers.zero;
}

exports.prompt = prompt;

['input', 'confirm', 'list', 'rawlist', 'expand', 'checkbox', 'password', 'editor'].forEach(type => {
  exports[type] = async function(message) {
    const answers = await inquirer.prompt([{name: 'zero', message, type}]);
    return answers.zero;
  };
});
