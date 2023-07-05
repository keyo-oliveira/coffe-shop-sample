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

interface CartAddress {
  cep: string;
  number: string;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  complement: string;
}
