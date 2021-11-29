import React from 'react';

class TodoForm extends React.Component {

    handleChanges = event => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }

    handleClick = event => {
        event.preventDefault();
        this.props.handleAddToDo(this.state.input);
    }

    render() {
        return(
            <form>
                <input onChange={this.handleChanges} type="text" name="task" />
                <button onClick={this.handleClick} >Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;