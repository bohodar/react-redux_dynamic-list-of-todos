import React from 'react'
import { connect } from "react-redux";

const Header = ({ todosAmount, usersAmount }) => {
  return (
    <header className="header">
      <span className="header__textblock t">React-Redux Todo List</span>
      <span className="header__textblock t1">Connected Users: {usersAmount}</span>
      <span className="header__textblock t2">All connected Todos: {todosAmount}</span>
    </header>
  )
};
const mapState = (state) => {
  return {
    usersAmount: state.users.length,
    todosAmount: state.todos.length,
  }
};

export default connect(mapState)(Header);
