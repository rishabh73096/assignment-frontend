// 
const ProductCard = ({ image, productName, price, discountPercentage }) => {
    const discountedPrice = price - (price * discountPercentage / 100);
    return (
        <>

            <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="absolute rounded-lg  bg-red-500 text-white text-xs font-semibold px-3 py-1">
                    {discountPercentage}% Off
                </div>
                <img
                    src={image}
                    alt={productName}
                    className=" w-[300px] h-[200px] h-56 rounded-lg object-cover mb-4"
                />

                {/* Product Details */}
                <div className="px-4 ">
                    <h3 className="text-center text-[12px] font-semibold text-gray-800">{productName}</h3>
                    <div className="flex items-center justify-center gap-2 mt-2 ">
                        <p className="text-[13px] text-red-700 ">₹ {discountedPrice}</p>
                        <p className="text-[13px] text-gray-500 line-through">₹{price}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={image}
                            alt={productName}
                            className=" mt-2 w-[35px] h-[35px] object-cover mb-4 border-[1px] border-black"
                        />
                    </div>


                </div>
            </div>
        </>

    );
};



export default ProductCard;
