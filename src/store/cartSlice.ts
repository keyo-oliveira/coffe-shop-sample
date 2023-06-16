import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(
      state: Items[],
      action: {
        payload: Items;
        type: string;
      }
    ) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        productImage: action.payload.productImage,
      });

      state.map(items => console.log(items))
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
