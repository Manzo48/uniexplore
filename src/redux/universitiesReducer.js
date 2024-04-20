import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const universitiesSlice = createSlice({
  name: "universities",
  initialState: {
    universities: [],
    university: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUniversities.fulfilled, (state, action) => {
        state.universities = action.payload;
      })
      .addCase(getOneUniversity.fulfilled, (state, action) => {
        state.university = action.payload
      })
     
  },

});

const API_BASE_URL = "http://localhost:4000/universities";

export const getUniversities = createAsyncThunk("universities/get", async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw Error(`getUniversities: ${error}`);
  }
});

export const getOneUniversity = createAsyncThunk("university/get", async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`)
    return response.data;
  } catch (error) {
    throw Error(`getUniversity: ${error}`);
  }
})

export default universitiesSlice.reducer;