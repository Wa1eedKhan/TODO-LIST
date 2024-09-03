#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.bold.yellow("=".repeat(70)));
console.log(chalk.green("\n \t-------------Welcome to Todo-List Application---------------\n"));
console.log(chalk.bold.yellow("=".repeat(70)));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.blue.bold("Select an option you want to perform :"),
                choices: ["Add Task", "Delete Task", "Update task", "view todo-list", "Exit"],
            }
        ]);
        if (option.choice === ("Add Task")) {
            await addtask();
        }
        else if (option.choice === "Delete Task") {
            await deletetask();
        }
        else if (option.choice === "Update task") {
            await updateTask();
        }
        else if (option.choice === "view todo-list") {
            await viewtask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
            console.log(chalk.green.bold("\n \t-------------Thank you for using my Todo-List Application---------------\n"));
        }
    }
};
// function to add new task in todo-list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue.bold("Enter your new task : ")
        }
    ]);
    todolist.push(newtask.task);
    console.log(chalk.green.bold(`\n \t ${newtask.task} task added in Todo-list succesfully\n`));
};
//function to delete task from todo-list
let deletetask = async () => {
    await viewtask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.blue.bold("Enter the 'index no:' of the task you want to delete:")
        }
    ]);
    let deletedtask = todolist.splice(taskindex.index - 1, 1);
    console.log(chalk.green.bold(`\n \t ${deletedtask} task is deleted from Todo-list succesfully\n`));
};
// function to update task in todo-list
let updateTask = async () => {
    await viewtask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.blue.bold("Enter the 'index no:' of the task you want to update:")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.blue.bold("Enter the new task:"),
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk.green.bold(`\n \t ${update_task_index.new_task} task is updated in Todo-list succesfully \n`));
};
// function to view all todo-list task
let viewtask = () => {
    console.log(chalk.white.bold("\nYour Todo-list:\n"));
    todolist.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};
main();
