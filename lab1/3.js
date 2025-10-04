let tasks = ["apple", "banana", "cherry", "mango"];
//tasks


//add task
addTask = (task) =>{
    tasks.push(task);
    console.log("task has been insterted");
    console.log("number of tasks: " + tasks.length);
};


addTask("Go home")

//list all tasks in the array
listAllTasks = () =>{
    tasks.forEach(element => {
        console.log(element + "\n")
    });
}

listAllTasks();


//delete a task from the
// deleteTask = (stagedTask) =>{
//     tasks.forEach((element, index) => {
//         if (element === stagedTask){
//             tasks.splice(index, 1)
//             console.log(stagedTask + " has been deleted\n");
//         }
//     });
// }

deleteTask = (stagedTask) =>{
    let index = indexOf(stagedTask);
    tasks.forEach((element) => {
        if (indexOf(element) === index){
            tasks.splice(index, 1)
            console.log(stagedTask + " has been deleted\n");
        }
    });
}

deleteTask("cherry");
listAllTasks();