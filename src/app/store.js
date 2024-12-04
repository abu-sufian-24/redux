import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counters/CounterSlice';

const store = configureStore({
  reducer: {
    counters: counterSlice,
  },
});
export default store;
