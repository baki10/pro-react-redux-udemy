import React from "react";
import ReactDOM from "react-dom";

const el = (
    <div>
        <h1>My Todo List</h1>
        <input placeholder='Search' />
        <ul>
            <li>Learn ES6</li>
            <li>Learn React</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'))