import React from "react";

import TodoListItem from './todo-list-item'

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label='Learn ES6' /></li>
            <li><TodoListItem label='Learn React' /></li>
            <li><TodoListItem label='Build web app' /></li>
        </ul>
    );
};

export default TodoList;