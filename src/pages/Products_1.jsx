import { useEffect, useRef } from 'react';
import { products } from '../data/products';
import ProductCart from '../components/ProductCart';
import PropTypes from 'prop-types';

function Products_1({ selectedCategory }) {
  const topDivRef = useRef(null);

  const filteredProducts = selectedCategory && selectedCategory.length > 0 ? selectedCategory : products;

  useEffect(() => {
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  return (
    <div>
      <div>
        <h1 ref={topDivRef} className='text-3xl my-4 px-16'>List Products</h1>
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
