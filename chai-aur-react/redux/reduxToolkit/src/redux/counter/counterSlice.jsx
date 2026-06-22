// Import createSlice from Redux Toolkit - it's a function that creates a Redux slice with actions and reducers
import { createSlice } from "@reduxjs/toolkit";

// Create a counter slice - a slice is a portion of Redux state with its own reducers and actions
export const counterSlice = createSlice({
  // name: unique identifier for this slice in the Redux store
  name: "counter",

  // initialState: the starting value(s) for this slice of state
  initialState: {
    value: 0, // Counter starts at 0
  },

  // reducers: functions that define how state should change based on actions
  reducers: {
    // increment action: increases the counter value by 1
    increment: (state) => {
      state.value += 1;
    },

    // decrement action: decreases the counter value by 1
    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },

    // incrementByAmount action: increases the counter by a specific amount passed as payload
    // action.payload contains the data passed when the action is dispatched
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export action creators: these are functions that can be dispatched to trigger reducers
// They are automatically created by createSlice from the reducers we defined above
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the reducer as default: this is what gets added to the Redux store
export default counterSlice.reducer;
