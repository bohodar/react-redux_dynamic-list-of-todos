import React from 'react'
import {connect} from "react-redux";
import { toggleInput } from '../redux/todosReducer'

const TodoItem = ({ users, todo, toggleInput}) => {
  return (
    <tr
      className="todoitem"
      key={todo.id}
    >
      <td>{todo.id}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {toggleInput(todo.id)}}
        />
      </td>
      <td>
        {users.find(user => user.id === todo.userId).name}
      </td>
      <td
        className={ todo.completed ? "todoitem--completed" : null }
      >
        {todo.title}
      </td>
    </tr>
  )
};

const mapDispatch = { toggleInput };

const mapState = (state) => {
  return {
    users: state.users
  }
};

export default connect(mapState, mapDispatch)(TodoItem)