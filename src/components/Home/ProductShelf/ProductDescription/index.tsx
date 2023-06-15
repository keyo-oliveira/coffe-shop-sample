import React from "react";

interface ProductDescriptionProps {
    description: string
}

export const ProductDescription = ({description}: ProductDescriptionProps) => {
    return (
        <div className="product-description__container text-center">
            <p className="product-description_label font-roboto font-normal font-sm text-base-text">
                {description}
            </p>
        </div>
    )
}