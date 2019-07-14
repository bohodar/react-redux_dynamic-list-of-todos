import React, { useState } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos, users, sortedTodos, sortTodos }) => {
  const [test, toggleTest] = useState(0);
  const sortWrapper = (type) => {
    sortTodos(type, todos, users)
  };
  return (
    <table className="todolist-wrapper">
      <thead>
        <tr>
          <th onClick={() => sortWrapper("BY_ID")}>ID</th>
          <th onClick={() => sortWrapper("BY_COMPLETED")}>Completed</th>
          <th onClick={() => sortWrapper("BY_USERNAME")}>Name</th>
          <th onClick={() => sortWrapper("BY_TITLE")}>Title</th>
        </tr>
      </thead>
      <tbody className="todolist">
        {sortedTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
      </tbody>
    </table>
  )
};

const mapState = (state) => {
  return {
    todos: state.todos,
    users: state.users,
    sortedTodos: state.sortedTodos
  }
};
const mapDispatch = (dispatch) => {
  return {
    sortTodos: (type, todos, users = []) => dispatch({
      type: "SORT_TODOS",
      sortType: type,
      primaryTodos: todos,
      users: users
    })
  }
};

export default connect(mapState, mapDispatch)(TodoList);
