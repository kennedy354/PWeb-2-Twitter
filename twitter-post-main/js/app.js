//https://github.com/joseolinda/twitter-post

const task = document.querySelector("#testando")
const btnAddTask = document.getElementById("add_tweet")

const toDoList = document.querySelector("#postar")

btnAddTask.onclick = function(e){
    e.preventDefault()
    const newTask = document.createElement("p")
    const taskText = document.createTextNode(task.value)
    newTask.appendChild(taskText)
    toDoList.appendChild(newTask)
    task.value = ""
}