import React, { Component } from 'react';
import { Consumer } from './Context';
import './form.css';

class Form extends Component{
  state = {
    title: ''
  }
  handlnInput =(e)=>{
    this.setState({
      title: e.target.value
    })
  }
  addTodo =(dispatch)=>{
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.random()*10,
        title: this.state.title,
        complete: false
      }
    })
    this.setState({
      title: ''
    })
  }
  render(){
    return (
        <Consumer>
          {value => 
            <div className="form">
              <input type="text" value={this.state.title} onChange={this.handlnInput} placeholder="add todo" />
              <button onClick={()=>this.addTodo(value.dispatch)}>add todo</button>
            </div>
          }
        </Consumer>
    )
  }
}

export default Form;