import { log } from "console";
import inquirer from "inquirer";

let todos=[];
while(true){
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: 'add todo item in listing'
        },
        {
            name: "addMore",
            type: "list",
            choices: ["yes","no"]
        }
    ]);

    const{Todoitme,addMore}=input;
    todos.push(Todoitme);
    if (addMore == "no"){
        console.log("Todolist");

        for(let i=0; i<todos.length; i++)
            {console.log(todos[i])}
        break;
    }
}