import { configureStore } from '@reduxjs/toolkit';
import adminCarSlice from '../features/adminCarSlice';
import adminOrderSlice from '../features/adminOrderSlice';
import authSlice from '../features/authSlice';
import cartSlice from '../features/cartSlice';
import customerOrderSlice from '../features/customerOrderSlice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    adminCarReducer: adminCarSlice,
    adminOrderReducer: adminOrderSlice,
    cartReducer: cartSlice,
    customerOrderReducer: customerOrderSlice,
  },
});
