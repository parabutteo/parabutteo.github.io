import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isInitialized: boolean;
}

const loadTokenFromStorage = () => {
  try {
    return localStorage.getItem('token') || null;
  } catch {
    return null;
  }
};

const initialState: AuthState = {
  token: loadTokenFromStorage(),
  isInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setInitialized(state) {
      state.isInitialized = true;
    },
  },
});

export const { setToken, setInitialized } = authSlice.actions;
export default authSlice.reducer;
