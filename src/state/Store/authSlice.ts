// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../types/general';

const userFromStorage = localStorage.getItem('user');

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loadAuthFromLocalStorage = () => (dispatch: any) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (token && user) {
    dispatch(login({ user: JSON.parse(user), token }));
  }
};

export default authSlice.reducer;