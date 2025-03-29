import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// import profileReducer from './profileSlice';
import cartReducer from '../features/cart/cartSlice';
// import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // profile: profileReducer,
    cart: cartReducer,
    // products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
