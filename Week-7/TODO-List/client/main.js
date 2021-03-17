const taskTextBox = document.getElementById('taskTextBox');
const prioritySelect = document.getElementById('prioritySelect');
const dateInput = document.getElementById('dateInput');
const addBtn = document.getElementById('addBtn');
const taskUL = document.getElementById('taskUL');

function getToDoList(displayTasks) {
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todoList => {
            displayTasks(todoList)
        })
}


function displayTasks(todoList) {
    const todoItem = todoList.map((todo) => {
        return `<li>${todo.title} | ${todo.priority} | ${todo.date}</li>`
    })
    taskUL.innerHTML = todoItem.join("")
}


addBtn.addEventListener("click", () => {
    const title = taskTextBox.value;
    const priority = prioritySelect.value;
    const date = dateInput.value;

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            priority: priority,
            date: date
        })
    })
    .then(response => response.json())
    .then(result => {
        getToDoList(displayTasks)
    })

    taskTextBox.value = ""
    prioritySelect.value = "Low"
    dateInput.value = ""
})

getToDoList(displayTasks)