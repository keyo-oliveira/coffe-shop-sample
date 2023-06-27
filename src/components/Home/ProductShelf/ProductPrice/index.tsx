import React from "react";
import { FormattedNumber } from "react-intl";

interface ProductPriceProps {
    price: number
    style?: string
}

export const ProductPrice = ({price, style}: ProductPriceProps) => {
    if(!price) return null

    const parsedPrice = price / 100

    return (
        <div className={`product-price__container ${style}`}>
            <span className="product-price__currency text-xs font-bold text-base-text font-baloo">
               R$              
            </span>
            <span className="product-price_label text-base font-extrabold text-base-text font-baloo">
               <FormattedNumber value={parsedPrice} minimumFractionDigits={2}/>               
            </span>
        </div>
    )
}