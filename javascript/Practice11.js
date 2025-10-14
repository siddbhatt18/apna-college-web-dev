let todo = [];
let req = prompt("enter your request");
while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }
    if(req == "list") {
        for(let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    }
    else if(req == "add") {
        let task = prompt("enter your task");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "del") {
        let idx = prompt("enter task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else {
        console.log("invalid request");
    }
    req = prompt("enter your request");
}