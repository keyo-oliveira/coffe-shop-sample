import React from "react"
import {ShoppingCart} from '@phosphor-icons/react'
import { Link } from "react-router-dom"

export const MiniCart = () => {
    return (
        <Link to="/cart" className="mini-cart__container w-9 h-9 bg-light-orange rounded-lg flex items-center justify-center">
            <ShoppingCart width={22} height={22} color={'#C47F17'}/>
        </Link>
    )
}