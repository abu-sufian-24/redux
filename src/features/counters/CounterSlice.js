import { createSlice } from '@reduxjs/toolkit';

const initialCounters = [
  {
    id: 1,
    value: 3,
  },
  {
    id: 2,
    value: 4,
  },
  {
    id: 3,
    value: 0,
  },
];

const CounterSlice = createSlice({
  name: 'counters',
  initialState: initialCounters,
  reducers: {
    Increment: (state, action) => {
      const countIndex = state.findIndex(item => item.id === action.payload);
      state[countIndex].value++;
    },
    Decrement: (state, action) => {
      const countIndex = state.findIndex(item => item.id === action.payload);
      if (countIndex !== -1 && state[countIndex].value > 0) {
        state[countIndex].value--;
      }
    },
  },
});

export default CounterSlice.reducer;
export const { Increment, Decrement } = CounterSlice.actions;
