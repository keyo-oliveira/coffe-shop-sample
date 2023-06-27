import { Trash } from "@phosphor-icons/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuantityStepper } from "../../Home/ProductShelf/QuantityStepper";
import { ProductPrice } from "../../Home/ProductShelf/ProductPrice";
import { ProductTitle } from "../../Home/ProductShelf/ProductTitle";
import { ProductImage } from "../../Home/ProductShelf/ProductImage";
import { removeItem } from "../../../store/cartSlice";
import { RootState } from "../../../store";

export const Items = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (item: Items) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-items__container max-w-md w-[448px] col-start-2 row-start-1 mt-10">
      {cartState.map((item: Items) => {
        return (
          <div className="cart-items__wrapper flex justify-center items-start gap-4" key={item.id}>
            <ProductImage
              imageSrc={item.productImage}
              imageAlt={item.name}
              style="mt-[0px] max-w-[64px]"
            />
            <div className="flex flex-col items-start gap-2">
              <ProductTitle title={item.name} style="font-normal text-base" />
              <div className="flex gap-4">
                <QuantityStepper productId={item.id} />
                <button className="cart-items__trash-button flex items-center justify-center h-9 w-24 bg-base-button rounded-lg " onClick={() => handleRemoveItem(item)}>
                  <Trash color="#8047F8" size={16} height={16} />
                  <span className="cart-items__trash-button--label capitalize font-roboto font-normal text-base-text ml-1">
                    Remover
                  </span>
                </button>
              </div>
            </div>
            <ProductPrice price={item.price} style="ml-12" />
          </div>
        );
      })}
    </div>
  );
};
