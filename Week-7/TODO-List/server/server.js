const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());


let todoList = [{"title": "Cook Food", "priority": "High", "date":"2021-03-15"}]

server.get("/todos", (req, res) => {
    res.json(todoList);
})

server.post("/todos", (req, res) => {
    const title = req.body.title;
    const priority = req.body.priority;
    const date = req.body.date;
    const task = {"title":title, "priority":priority, "date":date}

    todoList.push(task);
    res.json({message:"Task has been added"})
})

server.listen(3000, () => {
    console.log("Server is running...")
})