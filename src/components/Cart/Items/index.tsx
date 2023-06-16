import { TrashSimple } from "@phosphor-icons/react";
import React from "react"
import { useSelector } from "react-redux";
import { QuantityStepper } from "../../Home/ProductShelf/QuantityStepper";



export const Items = () => {
    const cartState = useSelector((state: any) => state.cart);    
    return (
        <div className="cart-items__container">
        {cartState.map((item: Items) => {
            return(
                <div>
                    <img src={item.productImage} alt={item.productImage} />
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button>
                        <span>Remover</span>
                        <TrashSimple />
                    </button>
                    <QuantityStepper productId={item.id}/>
                </div>
            )
        })}
        </div>
    )
}