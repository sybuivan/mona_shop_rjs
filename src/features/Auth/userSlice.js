import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersApi from "../../api/usersApi";

export const register = createAsyncThunk("users/register", async (payload) => {
  await usersApi.register(payload);
  const {email, fullName} = payload;
  localStorage.setItem('user', JSON.stringify({email, fullName}))

  return {email, fullName}
});

export const login = createAsyncThunk("users/login", async (payload) => {
  const data = await usersApi.login(payload);
  
  const { token, user} = data.data
  localStorage.setItem('access__token', token)
  localStorage.setItem('user', JSON.stringify(user))
  
  console.log('data user', token);
  return user
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },

  reducers: {
    logout(action, state) {
      // clear localstorage
      localStorage.removeItem('user');
      localStorage.removeItem('access__token');

      // set state current {}
      state.current = {}
    }
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload
   })
    
  },
});

const { reducer, actions } = userSlice;
export const {logout} = actions
export default reducer;
