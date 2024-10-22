import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "react-use-cart";

function ProductCart(props) {
  const { name, price, img, slug } = props.product;
  const { addItem } = useCart();

  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
      <Link to={`/details/${slug}`}>
        <img src={img} alt={name} className='w-full h-80 object-cover drop-shadow-[0_80px_30px_#0007]' />
      </Link>
      <h3 className='text-2xl py-2 text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font-medium'>{price}</span>
        </p>
        <button onClick={() => addItem(props.product)} className='bg-teal-600 hover:bg-teal-700 p-2 rounded-md text-sm text-white flex items-center gap-2'>
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCart;
