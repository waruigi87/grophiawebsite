import React from "react";

function ProductCard({
  imageSrc,
  imageAlt,
  name,
  weight,
  price,
  className = "",
}) {
  return (
    <div
      className={`w-full rounded-xl p-4 flex flex-col items-center ${className}`}
    >
      <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-base">{weight}</p>
        <p className="text-base font-semibold">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;