const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});


function main(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to choose?',
            name: 'action',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update a employee role'
            ]
        }
    ])
        .then((answers)=> {
        if(answers.action == 'view all departments'){
            db.query('SELECT * FROM department;', (err, dataRes)=> {
                console.table(dataRes)
                main();
            })
        } else {
        if(answers.action == 'view all roles'){
            db.query('SELECT * FROM role;', (err, dataRes)=> {
                console.table(dataRes)
                main();
            })
        } else {
        if(answers.action == 'view all employees'){
            db.query('SELECT * FROM employee;', (err, dataRes)=> {
                console.table(dataRes)
                main();
            })
        } 
    }
    }
})
}



main();
