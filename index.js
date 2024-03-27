#! /usr/bin/env node 
import inquirer from "inquirer";
// ATM Machine
let totalAmount = 160000;
let pincode = 1630;
let atm = await inquirer.prompt({
    message: "Enter your pincode.",
    type: "number",
    name: "pin"
});
if (atm.pin === pincode) {
    console.log("Correct pin code");
    let operation = await inquirer.prompt({
        message: "What do you want to ?",
        type: "list",
        name: "operator",
        choices: ["withdraw", "check Balance"]
    });
    if (operation.operator === "withdraw") {
        let amount = await inquirer.prompt({
            message: "Payment method",
            type: "list",
            name: "withdrawAmount",
            choices: ["Fast Cash", "Select amount"]
        });
        if (amount.withdrawAmount === "Fast Cash") {
            let fastOption = await inquirer.prompt({
                message: "Please select amount",
                type: "list",
                name: "option",
                choices: ["5000", "10000", "20000", "50000", "100000", "160000"]
            });
            if (fastOption.option === "5000") {
                totalAmount -= 5000;
                console.log("Transfer Completed!.\n");
                console.log(`your remaining balance is. ${totalAmount}`);
            }
            else if (fastOption.option === "20000") {
                totalAmount -= 20000;
                console.log("Transfer Completed!.\n");
                console.log(`your remaining balance is. ${totalAmount}`);
            }
            else if (fastOption.option === "50000") {
                totalAmount -= 50000;
                console.log("Transfer Completed!.\n");
                console.log(`your remaining balance is. ${totalAmount}`);
            }
            else if (fastOption.option === "100000") {
                totalAmount -= 100000;
                console.log("Transfer Completed!.\n");
                console.log(`your remaining balance is. ${totalAmount}`);
            }
            else if (fastOption.option === "160000") {
                totalAmount -= 160000;
                console.log("Transfer Completed!.\n");
                console.log(`your remaining balance is. ${totalAmount}`);
            }
            else {
                console.log("please slect valid amount");
            }
        }
        else if (amount.withdrawAmount === "Select amount") {
            let action = await inquirer.prompt({
                message: "Enter your amount.",
                type: "number",
                name: "amount"
            });
            if (action.amount <= totalAmount) {
                let remainingAmount = totalAmount - action.amount;
                console.log("Transfer Completed.\n");
                console.log(`your remaining balance is. ${remainingAmount}`);
            }
            else {
                console.log("Insufficient Balance.");
            }
        }
    }
    else if (operation.operator === "check Balance") {
        console.log(`your Balance is. ${totalAmount}`);
    }
}
else {
    console.log("invalid pincode.");
}
