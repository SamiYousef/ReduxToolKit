import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: () => {
      return initialState;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export default counterSlice.reducer;
export const {
  increment,
  decrement,
  reset,
  incrementByAmount
} = counterSlice.actions;
