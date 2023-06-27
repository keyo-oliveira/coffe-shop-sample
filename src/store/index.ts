import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import quantityReducer from './quantityStepperSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    quantity: quantityReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch