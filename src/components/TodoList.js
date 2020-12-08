import Todo from './Todo';
import React ,{ Component } from 'react';
import { Consumer } from './Context';

class TodoList extends Component{

  render(){
    return (
      <Consumer>
        {value => value.todos.map(todo => <Todo todo={todo} key={todo.id} />)}
      </Consumer>
    )
  }
}

export default TodoList