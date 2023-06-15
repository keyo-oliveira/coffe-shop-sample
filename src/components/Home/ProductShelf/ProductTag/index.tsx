import React from "react";

interface ProductTagProps {
  Tags: string[];
}

export const ProductTag = ({ Tags }: ProductTagProps) => {
  return (
    <>
      {Tags.map((tag, index) => {
        return (
          <div className="product-tag__container bg-light-orange rounded-xl pr-2 pl-2 mt-3" key={`${tag + index + "1"}`}>
            <span className="product-tag__label text-brand-yellow-dark font-roboto font-bold text-[10px] uppercase">{tag}</span>
          </div>
        );
      })}
    </>
  );
};
