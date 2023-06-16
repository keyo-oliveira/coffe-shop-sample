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
      const hasItem = state.find(item => item.id === action.payload.id)

      if(hasItem) state.find(item => {
        item.quantity = item.quantity + action.payload.quantity
        //todo, add more quantity to current item
        console.log(item)
      })

     if(!hasItem) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        productImage: action.payload.productImage,
      });
     }

      state.map(items => console.log(items))
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
