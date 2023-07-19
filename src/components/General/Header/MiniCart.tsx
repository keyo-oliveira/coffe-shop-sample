import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const MiniCart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const currentCartItems = cartState.items.length;

  return (
    <Link
      to="/cart"
      className="mini-cart__container w-9 h-9 bg-light-orange rounded-lg flex items-center justify-center relative"
    >
      <ShoppingCart width={22} height={22} color={"#C47F17"} />
      <span className="mini-cart__current-items-label bg-brand-yellow-dark text-white rounded-full absolute top-[-25%] right-[-25%] w-4 h-4 font-roboto text-xs flex items-center justify-center">{currentCartItems}</span>
    </Link>
  );
};
