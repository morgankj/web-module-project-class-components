import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: toDos
    }
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter(toDo => {
        return (!toDo.completed);
      })
    })
  }

  handleToggleTodo = (toDo) => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.map(t => {
        if (t.id === toDo.id) {
          return {...t, completed: !t.completed}
        } else {
          return t;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDos={this.state.toDos} handleToggleTodo={this.handleToggleTodo} />
        {/* <TodoForm /> */}
        <button onClick={this.handleToggle} id="clearBtn">Clear Completed</button>
      </div>
    );
  }
}

export default App;
