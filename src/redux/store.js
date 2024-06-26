import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from './universitiesReducer'; // Убедитесь, что правильно импортируете ваш universities reducer
import searchReducer from './searchReducer';

export const store = configureStore({
  reducer: {
    data: universitiesReducer, // Предполагаем, что все данные университетов находятся здесь
    search: searchReducer, // Правильное место для search reducer
  },
});
