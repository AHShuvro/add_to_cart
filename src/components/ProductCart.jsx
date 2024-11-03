import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegHeart } from 'react-icons/fa';
import { IoLayersOutline } from 'react-icons/io5';
import { FcRating } from 'react-icons/fc';
import { useExtendedCart } from '../data/use-react-cart';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function ProductCart({ product }) {
  const { name, price, img1, img2, slug, id, colors } = product;

  const [ choseColor, setChoseColor ] = useState('Black')

  const {
    addItemToCart,
    addItemToWishlist,
    isInCart,
  } = useExtendedCart();

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  const handleAddToWishlist = () => {
    addItemToWishlist(product);
  };

  const [modal, setModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className='bg-white shadow-sm rounded-xl'>
      <div className='group relative my-2'>
        <div className='overflow-hidden relative'>
          <Link to={`/allProducts/${slug}`}>
            <div className='pointer-events-none'>
              <img
                className='w-full transition-opacity duration-500 transform scale-100 group-hover:scale-105 opacity-100 group-hover:opacity-0'
                src={img1}
                alt={name}
              />
              <img
                className='w-full transition-opacity duration-500 transform scale-110 opacity-0 group-hover:opacity-100 absolute inset-0'
                src={img2}
                alt={`${name} on hover`}
              />
              <div className='bg-black opacity-10 w-full h-full absolute top-0 hidden group-hover:block pointer-events-none'></div>
            </div>
          </Link>

          <div className='absolute hidden group-hover:flex flex-col gap-1 top-4 right-4 pointer-events-auto'>
            <div onClick={handleAddToWishlist} className='w-8 h-8 flex items-center justify-center duration-300 rounded-full bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer'>
              <FaRegHeart />
            </div>
            <div className='w-8 h-8 flex items-center justify-center duration-300 rounded-full bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer'>
              <IoLayersOutline />
            </div>
            <div className='w-8 h-8 flex items-center justify-center duration-300 rounded-full bg-white hover:bg-teal-600 text-black hover:text-white cursor-pointer'>
              <FaRegEye />
            </div>
          </div>

          <div className='w-full flex justify-center pointer-events-auto absolute -bottom-14 group-hover:bottom-1 duration-300 py-2'>
            <button disabled={isInCart(id)} onClick={toggleModal} className='w-full mx-8 py-2 rounded-sm text-center bg-teal-600 hover:bg-teal-700 text-white font-medium'>
              {isInCart(id) ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>

        <div className='mt-4 flex flex-col items-center gap-2'>
          <p className='font-semibold hover:text-teal-600 duration-300 cursor-pointer'>{name}</p>
          <div className='flex gap-1'>
            {[...Array(5)].map((_, index) => (
              <FcRating key={index} />
            ))}
          </div>
          <p className='text-sm text-gray-500'>Price: ${price.toFixed(2)}</p>
        </div>
      </div>

      {/* Modal */}
      {
        modal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center transition-all duration-500 ease-in-out">
            <div className="bg-white w-11/12 sm:w-3/4 md:w-4/5 xl:w-2/3 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100 rotate-0 hover:rotate-2">
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-red-600 transition-transform duration-300 transform hover:rotate-180"
                onClick={toggleModal}
              >
                <AiOutlineClose size={24} />
              </button>

              <p className='text-lg sm:text-xl font-bold text-[#222222] mb-4 uppercase'>Option For You</p>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                <img src={img1} alt={name} />
                <div>
                  <p className='font-semibold text-[#111111] '>{name}</p>
                  <p className='font-bold text-lg text-[#111111] '>${price.toFixed(2)}</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='text-[#555555]'>Color: <span className='text-lg text-black font-bold'>{choseColor}</span></p>
                  <div className='flex gap-2'>
                    {colors && colors.length > 0 ? (
                      colors.map((color, idx) => (
                        <div
                        onClick={() => setChoseColor(color.name)}
                          key={idx}
                          style={{
                            backgroundColor: color.name,
                          }}
                          className={`w-6 h-6 rounded-full hover:border-[2px] hover:border-red-400 cursor-pointer`}
                        ></div>
                      ))
                    ) : (
                      <p>No colors available</p>
                    )}
                  </div>
                </div>

              </div>

              <div onClick={handleAddToCart} className="flex justify-center mt-10">
                <button
                  className=" sm:text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 px-4 sm:px-8 py-1 sm:py-3 rounded-full shadow-md transition-transform duration-300 hover:rotate-6"
                  onClick={toggleModal}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        hex: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductCart;
