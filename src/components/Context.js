import React, { Component, createContext } from 'react';

const Context = createContext();

const reducer =(state, action)=>{
  switch(action.type){
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'TODO_COMPLETE':
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === action.payload ? {...todo,complete : !todo.complete } : todo)
    };
    case 'ADD_TODO': 
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    default:
      return state
  }
}

export class Provider extends Component {

  state = {
    todos: [
      {id: 1, title: 'go to gym', complete: false},
      {id: 2, title: 'visit my mome', complete: false},
      {id: 3, title: 'learn mongoDB', complete: false},
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;