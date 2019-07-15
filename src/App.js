import React from 'react';
import { connect } from 'react-redux';

import { getUsers, getTodos } from './api/api';
import { setTodos } from './redux/todosReducer'
import { setUsers } from './redux/usersReducer'
import { loading } from './redux/loadingReducer'

import Header from './components/Header'
import TodoList from './components/TodoList'
import logo from './logo.svg';

import './App.css';

class App extends React.Component {
  loadingData = async () => {
    const { loading, setUsers, setTodos } = this.props;
    loading(true);
    const users = await getUsers();
    const todos = await getTodos();
    setUsers(users);
    setTodos(todos);
    loading(false);
  };

  render () {
    const { isLoading, isDataLoaded } = this.props;
    return (
      <div className="main-wrapper">
        <Header />
        {!isDataLoaded ?
          ( <div
            onClick={this.loadingData}
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
const mapDispatch = {
    loading,
    setTodos,
    setUsers
};
export default connect(mapState, mapDispatch)(App);
