#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
const myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct pin code!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Deposit", "Check Balance", "Exit"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient funds!"));
        }
        else
            myBalance -= amountAns.amount;
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let amountAns = await inquirer.prompt([
            {
                message: "Select your amount",
                name: "amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Deposit") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance += amountAns.amount;
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log("Thank you for using ATM");
    }
}
else {
    console.log(chalk.red("Wrong pin code!!!"));
}
