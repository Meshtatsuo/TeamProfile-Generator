const welcomeMessage = `
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    WELCOME TO THE TEAM PROFILE GENERATOR
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    `;

// display welcome message and begin prompts in util/inquirer.js
function init() {
  console.log(welcomeMessage);
  inquirer.promptUser();
}

init();