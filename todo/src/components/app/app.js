import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        selectedTab: 'all', // all, active or done
        filterText: ''
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // нельзя изменять state на-прямую
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return { todoData: newTodoData }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newTodoData = [
                ...todoData,
                newItem
            ];
            return { todoData: newTodoData };
        });
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'done') }
        });
    }

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') }
        });
    }

    onTabSelected = (selectedTab) => {
        this.setState({ selectedTab });
    }

    onFilterInputChange = (filterText) => {
        this.setState({ filterText });
    }

    filterByTab = (todoData, tab) => {
        if (tab === 'active') {
            return todoData.filter((todo) => !todo.done);
        }
        if (tab === 'done') {
            return todoData.filter((todo) => todo.done);
        }
        // All
        return todoData;
    }

    search = (todoData, text) => {
        if (text.length < 3) {
            return todoData;
        }
        return todoData.filter((todo) => {
            return todo.label.toUpperCase().includes(text.toUpperCase());
        });
    }

    render() {
        const { todoData, filterText, selectedTab } = this.state;

        let todos = this.search(this.filterByTab(todoData, selectedTab), filterText)

        const doneCount = todos.filter(({ done }) => done).length;
        const todoCount = todos.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onFilterInputChange={this.onFilterInputChange} />
                    <ItemStatusFilter onTabSelected={this.onTabSelected} activeTab={selectedTab} />
                </div>

                <TodoList
                    todos={todos}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }
};