// 
const ProductCard = ({ image, productName, price, discountPercentage }) => {
   const discountedPrice =price - (price * discountPercentage / 100);
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-3 py-1">
                {discountPercentage}% Off
            </div>

            <img
                src={image}
                alt={productName}
                className="w-full h-56 object-cover mb-4"
            />

            {/* Product Details */}
            <div className="px-4 pb-4 mb-12">
                <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-xl font-bold text-gray-800">${discountedPrice}</p>
                    <p className="text-sm text-gray-500 line-through">${price}</p>
                </div>
            </div>
        </div>
    );
};



export default ProductCard;
