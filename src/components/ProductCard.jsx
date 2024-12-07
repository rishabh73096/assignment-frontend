import React from 'react';

const ProductCard = ({ image, name, price, discountedPrice }) => {
    const discount = ((price - discountedPrice) / price) * 100;

    return (

        <>

            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Best Seller and View All Section */}

                {/* Discount Label */}
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-3 py-1">
                    {discount.toFixed(0)}% Off
                </div>

                {/* Product Image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover mb-4"
                />

                {/* Product Details */}
                <div className="px-4 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-xl font-bold text-gray-800">${discountedPrice}</p>
                        <p className="text-sm text-gray-500 line-through">${price}</p>
                    </div>
                </div>
            </div>
        </>

    );
};



const App = () => {
    const products = [
        {
            image: 'https://via.placeholder.com/300',
            name: 'Product 1',
            price: 100,
            discountedPrice: 80,
        },
        {
            image: 'https://via.placeholder.com/300',
            name: 'Product 2',
            price: 150,
            discountedPrice: 120,
        },
        {
            image: 'https://via.placeholder.com/300',
            name: 'Product 3',
            price: 200,
            discountedPrice: 160,
        },
        {
            image: 'https://via.placeholder.com/300',
            name: 'Product 4',
            price: 250,
            discountedPrice: 200,
        },
    ];

    return (
        <>
            <div className="p-4">
                <h2 className="text-3xl font-semibold text-gray-800">BestSellers</h2>
                <div className="absolute top-0 right-0 text-gray-700 text-sm font-medium p-3 cursor-pointer hover:text-blue-500">
                    View All &gt;
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </>

    );
};

export default App;
