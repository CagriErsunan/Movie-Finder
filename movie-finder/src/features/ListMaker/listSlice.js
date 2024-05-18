import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'listMaker',
  initialState: {
    value: [],
  },
  reducers: {
    adder: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      console.log(action.payload);
      state.push(action.payload);
      
      return state;
    },

    deleter: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateList: (state, action) => {
      console.log(state);
      return state.map((listItem) => {
        if (listItem.id === action.payload.id) {
          return {
            ...listItem,
            item: action.payload.item,
          };
        }
        
        return listItem;
      });
    },

    completeList: (state, action) => {
      return state.map((listItem) => {
        if (listItem.id === action.payload) {
          return {
            ...listItem,
            completed: true,
          };
        }
        return listItem;
      });
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { adder, deleter, updateList, completeList} = listSlice.actions

export default listSlice.reducer