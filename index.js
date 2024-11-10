import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type: "number",
        name: "firstNumber",
    },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "division"],
    },
]);
// conditional sttement:
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
console.log(answer);
