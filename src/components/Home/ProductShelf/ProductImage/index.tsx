import React from "react"

interface ProductImageProps {
    imageSrc: string
    imageAlt: string
}

export const ProductImage = ({imageSrc, imageAlt} :ProductImageProps) => {
    return (
        <div className="product-image__container w-full h-auto mt-[-25%]">
            <img className="product-image__image" src={imageSrc} alt={imageAlt} />
        </div>
    )
}