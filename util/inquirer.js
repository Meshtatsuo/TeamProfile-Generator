// including third library modules
const inquirer = require("inquirer");
// including classes 
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
// including generate page module
const generator = require("./generatePage");
// arrays for each employee type
const managers = [];
const engineers = [];
const interns = [];

// main prompt function. Begins the process
// of adding employee info
function promptUser() {
  inquirer
    .prompt([{
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "number",
        name: "employeeId",
        message: "Enter the Employee ID:",
        validate: (id) => {
          if (!isNaN(id)) {
            return true;
          } else {
            console.log("Please enter a number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeName",
        message: "Enter Employee's Name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "Enter Employee's EMail:",
        validate: (email) => {
          // tests for valid email format. Would prefer to test if email can be sent but
          // for using fake emails this works for now.
          if (
            email
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          ) {
            return true;
          } else {
            console.log("Please use a valid email format!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      let employeeData = answers;
      //Prompt for engineer specific info, create new engineer, and add it to employee array
      switch (employeeData.employeeType) {
        //if manager, get office number, create new manager object
        //and add it to the managers array
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              name: "officeNumber",
              message: "Please enter the employee's office number: ",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter your name!");
                  return false;
                }
              },
            })
            .then((answer) => {
              employeeData.officeNumber = answer.officeNumber;
              const newManager = new Manager(
                employeeData.employeeName,
                employeeData.employeeId,
                employeeData.employeeEmail,
                employeeData.officeNumber
              );
              managers.push(newManager);
              console.log(managers);
              promptAddAnother();
            });
          break;
          // if engineer, get github profile, create new engineer object
          // and add it to the engineers array
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              name: "githubLink",
              message: "Please enter the engineer's github profile link: ",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a valid link!");
                  return false;
                }
              },
            })
            .then((answer) => {
              employeeData.githubLink = answer.githubLink;
              // create new engineer and add it to employee array
              const newEngineer = new Engineer(
                employeeData.employeeName,
                employeeData.employeeId,
                employeeData.employeeEmail,
                employeeData.githubLink
              );
              engineers.push(newEngineer);
              console.log(engineers);
              promptAddAnother();
            });
          break;
          // if intern, get intern's school name, create new intern object
          // and add it to the intern arrays
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              name: "schoolName",
              message: "Please enter the Intern's school name: ",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              },
            })
            .then((answer) => {
              employeeData.schoolName = answer.schoolName;
              // create new intern and add it to employee array
              const newIntern = new Intern(
                employeeData.employeeName,
                employeeData.employeeId,
                employeeData.employeeEmail,
                employeeData.schoolName
              );
              interns.push(newIntern);

              console.log(interns);
              promptAddAnother();
            });
          break;
      }
    });
};
// prompts user if they wish to add another employee
const promptAddAnother = () => {
  inquirer
    .prompt([{
      type: "confirm",
      name: "addNewEmployee",
      message: "Would you like to add another employee?",
      default: "yes",
    }, ])
    .then((answers) => {
      if (answers.addNewEmployee) {
        // if yes, start prompts again
        promptUser();
      } else {
        // if no, generate page content and write it to index.html file
        let content = generator.generatePage(managers, engineers, interns);

        generator.writeToFile(content);
      }
    });
};

exports.promptUser = promptUser;