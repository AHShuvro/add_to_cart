import { useEffect, useRef } from 'react';
import { products } from '../data/products';
import ProductCart from '../components/ProductCart';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Products_1({ selectedCategory }) {
  const topDivRef = useRef(null);

  const filteredProducts = selectedCategory && selectedCategory.length > 0 ? selectedCategory : products;

  useEffect(() => {
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  return (
    <div ref={topDivRef}>
      <div className='flex flex-col items-center w-full py-10'>
        <h1 className='text-3xl font-bold my-4'>Shop</h1>
        <p className='text-lg text-[#333333] select-none'><Link to={'/'}>Home</Link> / Shop</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCart product={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

Products_1.propTypes = {
  selectedCategory: PropTypes.number.isRequired,
};

export default Products_1;
