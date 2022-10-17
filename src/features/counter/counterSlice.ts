import { createSlice } from "@reduxjs/toolkit";
import { RootStore } from "../../app/store";

const initialState = {
  count: 0,
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
    },
  },
});

export const getCount = (state: RootStore) => state.counter.count;

export default counterSlice.reducer;

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
