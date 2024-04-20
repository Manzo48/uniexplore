import { configureStore } from '@reduxjs/toolkit';
import universitiesSlice from './universitiesReducer'

export const store = configureStore({
  reducer: {
    data: universitiesSlice,
  },
});
