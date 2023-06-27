import React from "react";

interface ProductTitleProps {
    title: string
    style?: string
}

export const ProductTitle = ({title, style}: ProductTitleProps) => {
    return (
        <div className="product-title__container">
            <h3 className={`product-title_label text-base-subtitle font-bold text-xl text-center ${style}`}>
                {title}
            </h3>
        </div>
    )
}