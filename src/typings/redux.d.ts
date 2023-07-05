interface QuantityStepperSlice {
    id: number;
    quantity: number;
  }


  interface CartState {
    items: Array<Items>;
    address: Partial<CartAddress>;
  }


