import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";

const EmailBodySlice = createSlice({
  name: "emailBody",
  initialState: {
    id: 0,
    body: "",
    show: false,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default EmailBodySlice.reducer;
