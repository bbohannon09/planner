import { configureStore } from '@reduxjs/toolkit';
import DayReducer from '../Reducers/DayReducer';

const store = configureStore({
  reducer: {
    dayReducer: DayReducer
  }
});

export default store;
