import React from "react";
import ReactDOM from "react-dom";

// react component
const TodoList = () => {
    return (
        <ul>
            <li>Learn ES6</li>
            <li>Learn React</li>
        </ul>
    );
};

const AppHeader = () => <h1>My Todo List</h1>;

const SearchPanel = () => <input placeholder='Search' />;

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))