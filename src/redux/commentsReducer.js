import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = "http://localhost:4001/comment";

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const createNewComment = createAsyncThunk('comments/createComment', async (commentData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('accessToken'); // Получаем Bearer токен из localStorage
    if (!token) {
      throw new Error('Не удалось найти Bearer токен');
    }

    const response = await axios.post(API_BASE_URL, commentData, {
      headers: {
        Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с Bearer токеном
      },
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewComment.fulfilled, (state, action) => {
        // Используем concat для создания нового массива без мутации состояния
        state.comments = state.comments.concat(action.payload);
      });
  },
});

export default commentsSlice.reducer;
