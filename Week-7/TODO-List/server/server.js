const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



let toDoList = [{title: "Cook Food", priority: "High", date:"03/15/2021"}]

app.get("/todos", (req, res) => {
    toDoListTasks = toDoList.map((task) => {
        return task
    })
    res.json(toDoListTasks);
})

app.listen(3000, () => {
    console.log("Server is running...")
})