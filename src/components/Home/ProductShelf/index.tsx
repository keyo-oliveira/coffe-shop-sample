import React from "react";
import { AddToCartButton } from "../AddToCartButton";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";
import { ProductTag } from "./ProductTag";
import { ProductTitle } from "./ProductTitle";
import { QuantityStepper } from "./QuantityStepper";

export const ProductShelf = (product: Product) => {
  return (
    <section className="shelf__container w-[16rem] flex items-center justify-center flex-col bg-base-card rounded-md h-[310px] pl-2 pr-2">
      <div className="shelf__image-container w-[7.5rem]">
        <ProductImage
          imageAlt={product.description}
          imageSrc={product.productImage}
        />
      </div>

      <div className="shelf__tags-container mb-6 flex gap-2">
        <ProductTag Tags={product.flags} />
      </div>

      <div className="shelf__title-description-container flex flex-col gap-2">
        <ProductTitle title={product.name} />
        <ProductDescription description={product.description} />
      </div>

      <div className="shelf__footer-container flex items-center justify-center gap-3 mt-8 pb-6">
        <ProductPrice price={product.price} />
        <QuantityStepper productId={product.id} />
        <AddToCartButton id={product.id} name={product.name} price={product.price} productImage={product.productImage} />
      </div>
    </section>
  );
};
