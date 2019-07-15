const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  return await fetch(`${BASE_URL}/users`)
    .then(response => response.json());
};

export const getTodos = async () => {
  return await fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
};
