import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Admin",
  email: "Admin12@gmail.com",
  authToken: "",
  name: "John",
  phone: "9876543210"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.authToken = action.payload.authToken;
    },
    updateProfile: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state = initialState;
    }
  }
});

export const { login, updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
