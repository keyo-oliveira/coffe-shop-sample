interface Product {
    name: string;
    id: number;
    price: number;
    description: string;
    flags: string[];
    availableQuantity: number;
    productImage: string;
}

type  maybeProduct =  Product | null | undefined 