/* ------------------------------------------------------------------------------------------
    TEAM PROFILE GENERATOR | Generate a webpage for your team based on user input
    Author: Dominic Misasi
   ------------------------------------------------------------------------------------------ */

const inquirer = require("./util/inquirer");


const welcomeMessage = `
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    WELCOME TO THE TEAM PROFILE GENERATOR
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    `;


function init() {
  console.log(welcomeMessage);
  inquirer.promptUser();
}

init();