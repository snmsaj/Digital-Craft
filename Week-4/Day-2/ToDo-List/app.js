let taskText = document.getElementById("taskText");
let addBtn = document.getElementById("addBtn");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");


// Add Task to Pending Tasks
addBtn.addEventListener("click", function() {

    let task = taskText.value

    let liItem = document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("change", function() {
        if(this.checked){
            completedTasks.appendChild(this.parentElement)
        }else{
            pendingTasks.appendChild(this.parentElement)
        }
    })

    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = task

    let removeBtn = document.createElement("button")
    removeBtn.innerHTML = "Remove"
    removeBtn.addEventListener("click", function(){
        this.parentElement.remove()
    })

    pendingTasks.appendChild(liItem)

    liItem.appendChild(checkbox)
    liItem.appendChild(taskLabel)
    liItem.appendChild(removeBtn)

    pendingTasks.appendChild(liItem)

})