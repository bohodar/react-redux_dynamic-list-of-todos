import {combineReducers, createStore} from 'redux';
import { sortTodosReducer, setTodosReducer } from './redux/todosReducer';
import { setUsersReducer } from './redux/usersReducer';
import { loadingReducer, loadToggleReducer } from './redux/loadingReducer'

const initialState = {
  todos: [],
  users: [],
  sortedTodos: [],
  isLoading: false,
  isDataLoaded: false
};

const reducer = combineReducers({
  todos: setTodosReducer,
  sortedTodos: sortTodosReducer,
  users: setUsersReducer,
  isLoading: loadingReducer,
  isDataLoaded: loadToggleReducer
});

const store = createStore(reducer, initialState);

export default store;
