import { createStore } from 'redux';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors
  }
};

// Initial state
const persistedState = loadState();

const initialState = {
  array: []
};

// Reducer function
const reducer = (state = persistedState || initialState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return {
        ...state,
        array: [...state.array, action.payload]
      };
    case 'REMOVE_VALUE':
        return {
          ...state,
          array: state.array.filter((_, index) => index !== action.payload)
        };
    case 'CLEAR_LIST':
      return {
        ...state,
        array: []
      };    
    default:
        return state;
  }
};

// Create store
const store = createStore(reducer);

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;