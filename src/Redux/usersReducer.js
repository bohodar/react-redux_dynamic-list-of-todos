const SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
};

export const setUsersReducer = (state = [], action) => {
  if (action.type === SET_USERS) {
      return action.users;
  }
  return state;
};
