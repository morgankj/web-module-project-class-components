import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTodo(props.toDo);
    }

    return(
        <div onClick={handleClick} className={`toDo${props.toDo.completed ? 'completed' : ''}`}>
            <p>{props.toDo.task}</p>
        </div>
    )
}

export default Todo;