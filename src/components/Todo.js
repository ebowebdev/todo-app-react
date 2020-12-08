import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';
import './todo.css';
import { Consumer } from './Context';

const deleteToto =(id, dispatch)=>{
  dispatch({
    type: 'DELETE_TODO',
    payload: id
  })
}

const todoComplete =(id, dispatch)=>{
  dispatch({
    type: 'TODO_COMPLETE',
    payload: id
  })
}

function Todo({todo}){
  return (
    <Consumer>
      {value => 
        (<div className="todo">
          <div className="todo-title">
          <p className={`${todo.complete ? "isComplete" : ""}`}>{todo.title}</p>
          </div>
          <div className="todo-btns">
            <span className="span-icon" onClick={()=>todoComplete(todo.id,value.dispatch)}>
              {todo.complete ? 
              <FontAwesomeIcon icon={faCheckSquare} className="icon todo-icon-isComplete"></FontAwesomeIcon> 
              : <FontAwesomeIcon icon={faCheckSquare} className="icon todo-icon-notComplete"></FontAwesomeIcon>}
            </span>
            <span className="span-icon todo-icon-update">
              <FontAwesomeIcon icon={faEdit} className="icon"></FontAwesomeIcon>
            </span>
            <span className="span-icon todo-icon-delete" onClick={()=>deleteToto(todo.id,value.dispatch)}>
              <FontAwesomeIcon icon={faTimes} className="icon"></FontAwesomeIcon>
            </span>
          </div>
        </div>)}
    </Consumer>
  )
}

export default Todo