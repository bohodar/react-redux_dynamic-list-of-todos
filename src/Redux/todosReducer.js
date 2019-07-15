const SET_TODOS = 'SET_TODOS';
const SORT_TODOS = 'SORT_TODOS';
const TOGGLE_INPUT = 'TOGGLE_INPUT';
const BY_ID = 'BY_ID';
const BY_COMPLETED = 'BY_COMPLETED';
const BY_USERNAME = 'BY_USERNAME';
const BY_TITLE = 'BY_TITLE';

export const setTodos = (todos) => {
  return {
    type: SET_TODOS,
    todos: todos
  }
};

export const sortTodos = (type, todos, users = []) => {
  return {
    type: SORT_TODOS,
    sortType: type,
    primaryTodos: todos,
    users: users
  }
};

export const toggleInput = (id) => {
  return {
    type: TOGGLE_INPUT,
    todoId: id
  }
};

export const setTodosReducer = (state = [], action) => {
  if (action.type === SET_TODOS) {
      return action.todos;
  }
  return state;
};

export const sortTodosReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;

    case SORT_TODOS:
      const todos = [...action.primaryTodos];
      switch (action.sortType) {
        case BY_ID:
          return todos.sort((a,b) => a.id - b.id);
        case BY_COMPLETED:
          return todos.sort((a,b) => a.completed - b.completed);
        case BY_USERNAME:
          const preparedTodos = todos.map(todo => {
            const user = action.users.find(user => user.id === todo.userId);
            return {
              ...todo,
              userName: user.name
            }
          });
          return preparedTodos.sort((a,b) => a.userName.localeCompare(b.userName));
        case BY_TITLE:
          return todos.sort((a,b) => a.title.localeCompare(b.title));
        default:
          return state;
      }

    case TOGGLE_INPUT:
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