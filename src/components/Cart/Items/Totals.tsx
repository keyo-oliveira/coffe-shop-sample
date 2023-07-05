import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { FormattedNumber } from "react-intl";

export const Totals = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const total = cartState.items.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  const shippingTotal = 0

  if(!cartState || !total) return null

  return (
    <section className="cart__total-container gap-4 flex flex-col">
      <div className="cart__total-itens-total flex justify-between">
        <span className="text-base text-base-text font-roboto">Total de Itens</span>
        <span className="text-base text-base-text font-roboto">
        <FormattedNumber value={total / 100} minimumFractionDigits={2} />
        </span>
      </div>
      <div className="cart__total-shipping-total flex justify-between">
        <span className="text-base text-base-text font-roboto">Total da Entrega</span>
        <span className="text-base text-base-text font-roboto">
        <FormattedNumber value={0 / 100} minimumFractionDigits={2} />
        </span>
      </div>
      <div className="cart__total-full-total flex justify-between">
        <span className="text-xl text-base-subtitle font-roboto font-bold">Total</span>
        <span className="text-xl text-base-subtitle font-roboto font-bold">
        <FormattedNumber value={(total + shippingTotal) / 100} minimumFractionDigits={2} />
        </span>
      </div>
    </section>
  );
};
