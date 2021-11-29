// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="toDo_list">
            {props.toDos.map(todo => (
                <Todo todo={todo} handleToggleTodo={props.handleToggleTodo} key={todo.id} />
            ))}
        </div>
    )
}

export default TodoList;