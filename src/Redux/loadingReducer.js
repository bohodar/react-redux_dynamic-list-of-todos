const LOADING = 'LOADING';

export const loading = (parameter) => {
  return {
    type: LOADING,
    isLoading: parameter
  }
};

export const loadingReducer = (state = false, action) => {
  if  (action.type === LOADING) {
    return action.isLoading
  }
  return state;
};
export const loadToggleReducer = (state = false, action) => {
  if (action.type === LOADING && action.isLoading === false) {
    return true;
  }
  return state;
};