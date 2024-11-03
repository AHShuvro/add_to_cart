import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import NotFound from './NotFound';
import { useExtendedCart } from '../data/use-react-cart';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Details() {

  const { slug } = useParams();

  const {
    addItemToCart,
    isInCart,
  } = useExtendedCart();

  const handleAddToCart = () => {
    addItemToCart(product);
  };


  const [modal, setModal] = useState(false);
  const [choseColor, setChoseColor] = useState('Black')

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


  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col md:flex-row items-start min-h-screen bg-gray-50 p-4 md:p-8">

      <div className="w-full md:w-1/2 p-4 md:sticky top-0 bg-white shadow-lg rounded-lg mb-6 md:mb-0">
        <img
          src={product.img1}
          alt={`${product.name} image`}
          className="w-full h-64 md:h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="flex gap-4 mt-4">
          <img
            src={product.img2}
            alt="Additional View"
            className="w-1/2 h-32 md:h-40 object-cover rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 space-y-6 overflow-y-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-xl md:text-3xl font-medium text-teal-700">${product.price}</p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">{product.longDescription}</p>

        <div className="border-t border-gray-200 pt-4">
          <h3 className=" text-[#555555] ">Colors: <span className='text-teal-600 font-medium'>{choseColor}</span></h3>
          <div className="list-disc flex items-center gap-2 text-gray-700 space-y-1 text-sm md:text-base">

            {product.colors && product.colors.length > 0 ? (
              product.colors.map((color, idx) => (
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

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Features</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm md:text-base">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Specifications</h3>
          <ul className="pl-6 text-gray-700 space-y-1 text-sm md:text-base">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Usage Instructions</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{product.usageInstructions}</p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Warranty</h3>
          <p className="text-gray-700 text-sm md:text-base">{product.warranty}</p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Customer Reviews</h3>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            {product.reviews.map((review, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold">{review.username}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() => { handleAddToCart; toggleModal }}>
          <button
            disabled={isInCart(product.id)}
            onClick={() => setModal(!modal)}
            className="w-full md:w-auto mt-6 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
          >
            {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>

        <Link
          to="/allProducts"
          className="block mt-6 text-center text-teal-700 font-medium hover:underline"
        >
          &lt; Back to Products
        </Link>
      </div>
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
                <img src={product.img1} alt={product.name} />
                <div>
                  <p className='font-semibold text-[#111111] '>{product.name}</p>
                  <p className='font-bold text-lg text-[#111111] '>${product.price.toFixed(2)}</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='text-[#555555]'>Color: <span className='text-lg text-black font-bold'>{choseColor}</span></p>
                  <div className='flex gap-2'>
                    {product.colors && product.colors.length > 0 ? (
                      product.colors.map((color, idx) => (
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

export default Details;
