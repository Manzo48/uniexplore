import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  signIn: false,
  signUp: false,
  users: [],
  user: null,
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
    builder.addCase(createUser.rejected.type, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(loginUser.rejected.type, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUsers.rejected.type, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getOneUser.fulfilled.type, (state, action) => {
      state.loading = false;
      state.user = action.payload
    })
  },
});


export const createUser = createAsyncThunk(
  'post/user',
  async (payload) => {
    try {
      console.log(payload)
      const response = await axios.post(
        'http://localhost:4001/users',
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
        'http://localhost:4001/login',
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

export const getOneUser = createAsyncThunk('fetch/user', async ({id}) => {
  try {
    const response = await axios.get(`http://localhost:4001/user/${id}`)
    return response.data
  } catch (error) {
    
  }
})

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  try {
    const response = await axios.get('http://localhost:4001/users');
    return response.data;
  } catch (error) {
    return error;
  }
});

export default userSlice.reducer;