import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: CartState = {
  items: [],
  address: {
    cep: '',
    city: '',
    complement: '',
    neighborhood: '',
    number: '',
    state:'',
    street: '',
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    addItem(
      state: CartState,
      action: {
        payload: Items;
        type: string;
      }
    ) {
      const hasItem = Boolean(
        state.items.find((item) => item.id === action.payload.id)
      );

      if (hasItem)
        state.items.find((cart) => {
          cart.quantity = cart.quantity + action.payload.quantity;
          //todo, add more quantity to current item
          console.log(cart);
        });

      if (!hasItem) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          productImage: action.payload.productImage,
        });
      }

      state.items.map((items) => console.log(items));
    },

    removeItem(
      state: CartState,
      action: {
        payload: Items;
      }
    ) {
      const itemToRemove = state.items.find((item) => item.id === action.payload.id);

      if (!itemToRemove)
        return console.error("No item founded to remove in cart slice action");

      const index = state.items.indexOf(itemToRemove);

      if (index > -1) {
        state.items.splice(index, 1);
      }
    },

    updateAddress(
      state: CartState,
      action:{
        payload: Partial<CartAddress>
      }
    ){
      state.address = {...state.address , ...action.payload}
      console.log(state.address)
    }
  },
});

export const { addItem, removeItem, updateAddress } = cartSlice.actions;
export default cartSlice.reducer;
