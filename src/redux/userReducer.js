import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  signIn: false,
  signUp: false,
  users: [],
  loading: false,
  error: '',
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled.type, (state) => {
      state.signUp = true;
      state.loading = false;
    });
    builder.addCase(loginUser.fulfilled.type, (state, action) => {
      state.signIn = true;
      state.loading = false;
      state.token = action.payload.token;
      state.id = action.payload.id;
    });
    builder.addCase(fetchUsers.fulfilled.type, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.pending.type, (state) => {
      state.loading = true;
    });
  },
});

export const createUser = createAsyncThunk(
  'post/user',
  async (payload) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/students',
        payload,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const loginUser = createAsyncThunk(
  'login/user',
  async (payload) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/students',
        payload,
      );
      const data = await response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      return { token: data.token, id: data.id };
    } catch (error) {
      return error;
    }
  },
);

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  try {
    const response = await axios.get('http://localhost:4000/user/users');
    return response.data;
  } catch (error) {
    return error;
  }
});

export default userSlice.reducer;