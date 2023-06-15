import React from "react";
import { useProductContext } from "../../contexts/ProductContext";
import { ProductShelf } from "../ProductShelf";

export const Shelf = () => {
  const { data } = useProductContext()
  const products = data
  

  if(!products) return null

  return (
   
      <div className="product-list__container flex items-center justify-center gap-8 mb-32">
      {
        products?.map(product => {
          if(!product) return null
          return (
            <ProductShelf {...product} key={product.id}/>
          )
        })
      }    
    </div>
    
  );
};
