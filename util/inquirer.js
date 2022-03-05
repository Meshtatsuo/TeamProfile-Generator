const inquirer = require("inquirer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

const employees = [];

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "number",
        name: "employeeId",
        message: "Enter the Employee ID:",
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
              employees.push(newManager);
              console.log(employees);
            });
          break;
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
                employeeData.name,
                employeeData.id,
                employeeData.employeeEmail,
                employeeData.githubLink
              );
              employees.push(newEngineer);
              console.log(employees);
            });
          break;
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
              employees.push(newIntern);

              console.log(employees);
            });
          break;
      }
    });
};

module.exports = {
  promptUser: promptUser(),
};
