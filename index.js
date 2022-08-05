const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./scr/template');
const teamArr = [];
const idArr = [];

function initApp() {

    function addManager() {
        console.log('Welcome to the team generator!');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    function addTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Which type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'I dont want to add any more team members.'
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's Email?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's Github username?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            addTeam();
        });
    }

    function addIntern() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            addTeam();
        });
    }

    function generateHTML() {

        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log('Your team is built!');
        fs.writeFileSync(outputPath, render(teamArr), 'utf-8');
    }
    
    addManager();
}

initApp();
