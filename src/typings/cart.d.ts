interface Cart {
  items: Items[];
}

interface Items {
  name: string;
  id: number;
  price: number;
  quantity: number;
  productImage: string;
}
