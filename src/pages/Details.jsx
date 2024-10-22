import React from 'react';
import { useCart } from 'react-use-cart';
import { useParams } from 'react-router-dom'; 
import { products } from '../data/products';


function Details() {
  const { addItem } = useCart();
  const { slug } = useParams(); 
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <img src={product.img} alt={product.name} className="w-full md:w-1/2 h-64 object-cover" />
        <div className="p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-700">${product.price}</p>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <button 
            onClick={() => addItem(product)} 
            className="mt-5 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
