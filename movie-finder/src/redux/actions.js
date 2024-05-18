// actions.js
export const addValue = value => ({
    type: 'ADD_VALUE',
    payload: value
  });
export const removeValue = index => ({
    type: 'REMOVE_VALUE',
    payload: index
  });
export const clearList = () => ({
    type: 'CLEAR_LIST'
  });