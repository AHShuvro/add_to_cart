import { useCart } from 'react-use-cart';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import NotFound from './NotFound';

function Details() {
  const { addItem } = useCart();
  const { slug } = useParams();

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

        <button
          onClick={() => addItem(product)}
          className="w-full md:w-auto mt-6 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-5 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
        >
          Add to Cart
        </button>

        <Link
          to="/allProducts"
          className="block mt-6 text-center text-teal-700 font-medium hover:underline"
        >
          &lt; Back to Products
        </Link>
      </div>
    </div>
  );
}

export default Details;
