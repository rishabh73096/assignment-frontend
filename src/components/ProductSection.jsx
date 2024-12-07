import React, { useState, useEffect } from 'react';
import ProductCard  from './ProductCard';

const ProductSection = () => {
        const [products, setProducts] = useState([]);
        const [visibleProducts, setVisibleProducts] = useState(8); 
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await fetch('http://localhost:3800/api');
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data);  // Assuming the API returns an array of products
                } catch (error) {
                    setError(error.message);  // Set error message if fetching fails
                } finally {
                    setLoading(false);  // Loading is false after the fetch is complete
                }
            };
    
            fetchProducts();
        }, []);
    
        const handleViewAllClick = () => {
            setVisibleProducts(products.length);  // Show all products
        };
    
        if (loading) {
            return <div>Loading...</div>;  // Show loading message or spinner while fetching data
        }
    
        if (error) {
            return <div>Error: {error}</div>;  // Show error message if there's an issue fetching data
        }
    
        return (
            <>
                <div className="p-4">
                    <h2 className="text-3xl font-semibold text-gray-800">BestSellers</h2>
                    <div
                        onClick={handleViewAllClick}
                        className="absolute right-0 text-gray-700 text-sm font-medium p-3 cursor-pointer hover:text-blue-500"
                    >
                        View All &gt;
                    </div>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
                    {products.slice(0, visibleProducts).map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            price={product.price}
                            discountPercentage={product.discountPercentage}
                        />
                    ))}
                </div>
            </>
        );
   
    
};
export default ProductSection;