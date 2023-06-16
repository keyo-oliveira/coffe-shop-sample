import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/cartSlice";

interface AddToCartButtonProps {
  id: number;
  price: number;
  name: string;
  productImage: string;
}

export const AddToCartButton = ({
  id,
  name,
  price,
  productImage,
}: AddToCartButtonProps) => {
  const dispatch = useDispatch();
  const quantityState = useSelector((state: any) => state.quantity);
  const currentItem = quantityState.find((item: QuantityStepperSlice) => item.id === id);
  const currentQuantity = currentItem?.quantity

  const handleDispatchAddProduct = () => {
    if (!id || !name || !price || !productImage) return;
    dispatch(
      addItem({
        id,
        name,
        price,
        quantity: currentQuantity,
        productImage,
      })
    );
  };
  return (
    <button
      className="add-to-cart__button flex items-center justify-center w-9 h-9 rounded-lg bg-brand-dark-purple"
      onClick={handleDispatchAddProduct}
    >
      <ShoppingCart width={22} height={22} color={"#fff"} />
    </button>
  );
};
