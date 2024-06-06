#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance =10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        message:"enter youre pin",
        type:"number"
    }
]);
if(pinAnswer.pin === myPin){
    // console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([{
        name:"operation",
        message:"piesae select option",
        type:"list",
        choices: ["withdraw" , "check balance" ,]
    }]);
    console.log(operationAns);
    if(operationAns.operation === 'withdraw'){
        let amountAns = await inquirer.prompt([{
            name:"amount",
            message :"enter your amount",
            type: "number"
        }]);
        if(amountAns.account <= myBalance){
            myBalance-=amountAns.account;
            console.log(`your remaining balance is : ${myBalance}`);
        }
        else{
            console.log("insufficient balance!");
        }
        if(operationAns.operation === "check Balance"){
            console.log(`ypur balance is ${myBalance}`);
        }
    }else if (operationAns.operation === "Fast cash"){
        let fastCashAns=await inquirer.prompt(
            [
                {
                    name : "fastcash",
                    message :"How much amount your want to fast cash :",
                    type : "list",
                    choices :[1000,2000,5000,10000]
                }
            ]
        );
        myBalance-=fastCashAns.fastCash
        console.log(`your remaining amount is ${myBalance}`);

    }
}
else{
    console.log("incorrect pin code");
}