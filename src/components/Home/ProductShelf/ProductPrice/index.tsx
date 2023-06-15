import React from "react";
import { FormattedNumber } from "react-intl";

interface ProductPriceProps {
    price: number
}

export const ProductPrice = ({price}: ProductPriceProps) => {
    if(!price) return null

    const parsedPrice = price / 100

    return (
        <div className="product-price__container">
            <span className="product-price__currency text-xs font-bold text-base-text font-baloo">
               R$              
            </span>
            <span className="product-price_label text-base font-extrabold text-base-text font-baloo">
               <FormattedNumber value={parsedPrice} minimumFractionDigits={2}/>               
            </span>
        </div>
    )
}