import {combineReducers, createStore} from 'redux';

const initialState = {
  todos: [],
  sortedTodos: [],
  users: [],
  isLoading: false,
  isDataLoaded: false
};

const settingTodosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos;

    default:
      return state;
  }
};

const sortingTodos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.todos;

    case 'SORT_TODOS':
      const todos = [...action.primaryTodos];
      switch (action.sortType) {
        case 'BY_ID':
          return todos.sort((a,b) => a.id - b.id);
        case 'BY_COMPLETED':
          return todos.sort((a,b) => a.completed - b.completed);
        case 'BY_USERNAME':
          const preparedTodos = todos.map(todo => {
            const user = action.users.find(user => user.id === todo.userId);
            return {
              ...todo,
              userName: user.name
            }
          });
          return preparedTodos.sort((a,b) => a.userName.localeCompare(b.userName));
        case 'BY_TITLE':
          return todos.sort((a,b) => a.title.localeCompare(b.title));
        default:
          return state;
      }

    case 'TOGGLE_INPUT':
      const id = action.todoId;

      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      });

    default:
      return state;
  }
};
const settingUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users;

    default:
      return state
  }
};
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return true;

    case 'FINISH_LOADING':
      return false;

    default:
      return state
  }
};
const loadToggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'FINISH_LOADING':
      return true;

    default:
      return state
  }
};

const reducer = combineReducers({
  todos: settingTodosReducer,
  sortedTodos: sortingTodos,
  users: settingUsersReducer,
  isLoading: loadingReducer,
  isDataLoaded: loadToggleReducer
});

const store = createStore(reducer, initialState);

export default store;
