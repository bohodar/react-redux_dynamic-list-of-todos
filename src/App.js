import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getTodos } from './api/api';

import Header from './components/Header'
import TodoList from './components/TodoList'
import logo from './logo.svg';

import './App.css';

class App extends React.Component {
  async loadingData() {
    const { startLoading, finishLoading, setUsers, setTodos } = this.props;
    startLoading();
    const users = await getUsers();
    const todos = await getTodos();
    setUsers(users);
    setTodos(todos);
    finishLoading();
  }

  render () {
    const { isLoading, isDataLoaded } = this.props;
    return (
      <div className="main-wrapper">
        <Header />
        {!isDataLoaded ?
          ( <div
            onClick={() => this.loadingData()}
            className="loader">
              <img
                src={logo}
                className="App-logo"
                alt="logo"
              />
              {!isLoading ?
                <span>Push this picture to start load</span> :
                <span>Loading data ...</span>
              }
            </div>) :
          ( <TodoList/> )
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    isLoading: state.isLoading,
    isDataLoaded: state.isDataLoaded
  }
};
const mapDispatch = (dispatch) => {
  return {
    startLoading: () => dispatch({type: 'START_LOADING'}),
    finishLoading: () => dispatch({type: 'FINISH_LOADING'}),
    setTodos: (todos) => dispatch({type: 'SET_TODOS', todos: todos}),
    setUsers: (users) => dispatch({type: 'SET_USERS', users: users}),
  }
};
export default connect(mapState, mapDispatch)(App);
