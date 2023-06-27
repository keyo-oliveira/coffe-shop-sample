import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: Items[] = []

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addItem(
      state: Items[],
      action: {
        payload: Items;
        type: string;
      }
    ) {
      const hasItem = Boolean(
        state.find((item) => item.id === action.payload.id)
      );

      if (hasItem)
        state.find((item) => {
          item.quantity = item.quantity + action.payload.quantity;
          //todo, add more quantity to current item
          console.log(item);
        });

      if (!hasItem) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          productImage: action.payload.productImage,
        });
      }

      state.map((items) => console.log(items));
    },

    removeItem(
      state: Items[],
      action: {
        payload: Items;      
      }
    ) {
      const itemToRemove = state.find((item) => item.id === action.payload.id);

      if (!itemToRemove)
        return console.error("No item founded to remove in cart slice action");

      const index = state.indexOf(itemToRemove);

      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
