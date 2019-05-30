import React from "react";

const TodoListItem = ({ label, important = false }) => {
    const itemStyle = {
        color: important ? 'tomato' : 'black'
    };
    return <span style={itemStyle}>{label}</span>;
};

export default TodoListItem;