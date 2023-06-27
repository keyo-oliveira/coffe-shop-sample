import React from "react"

interface ProductImageProps {
    imageSrc: string
    imageAlt: string
    style?: string
}

export const ProductImage = ({imageSrc, imageAlt, style} :ProductImageProps) => {
    return (
        <div className={`product-image__container ${style} w-full h-auto mt-[-25%]`}>
            <img className="product-image__image" src={imageSrc} alt={imageAlt} />
        </div>
    )
}
