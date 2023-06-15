import React from "react";
import {ShoppingCart} from '@phosphor-icons/react'

export const AddToCartButton = () => {
    return (
        <button className="add-to-cart__button flex items-center justify-center w-9 h-9 rounded-lg bg-brand-dark-purple">
            <ShoppingCart width={22} height={22} color={'#fff'}/>
        </button>
    )
}