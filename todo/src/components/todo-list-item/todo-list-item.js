import React from "react";
import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    onLabelClick = () => {
        console.log(`clicked ${this.props.label}`);
    }

    render() {
        const { label, important = false } = this.props;
        const itemStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        return (
            <span className='todo-list-item'>
                <span style={itemStyle}
                    className='todo-list-item-label'
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <button type='button'
                    className='btn btn-outline-success btn-sm float-right'>
                    <i className='fa fa-exclamation'></i>
                </button>
                <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'>
                    <i className='fa fa-trash-o'></i>
                </button>
            </span>
        );
    }
}