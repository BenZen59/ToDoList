import { useState } from "react";
import uuid from "uuid";
import NewToDo from "../components/NewToDo/NewToDo";
import "./Todo.css";

export default function ToDo(){
    const [todos, setTodos] = useState([
        {id: uuid(), task: 'Task 1', completed: false},
        {id: uuid(), task: 'Task 2', completed: true}
    ]);

    const create = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    }

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
}