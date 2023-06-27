import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: QuantityStepperSlice[] = []

const quantitySlice = createSlice({
  name: "quantity",
  initialState: initialStateValue,
  reducers: {
    changeQuantity(
      state: QuantityStepperSlice[],
      action: {
        payload: {
          id: number;
          quantity: number;
        };
      }
    ) {
      const item = state.find((item) => item.id === action.payload.id);
      if (!item) {
        state.push(action.payload);
      }

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { changeQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
