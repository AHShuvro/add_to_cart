import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-500 text-white shadow-lg">
      <nav className="flex space-x-6">
        <Link to="/" className="text-xl font-semibold hover:text-blue-400 transition duration-300">
          Home
        </Link>
      </nav>
      <Link to="/carts" className="flex items-center relative">
        <FiShoppingCart className="h-8 w-8 hover:text-blue-400 transition duration-300" />
        {totalItems > 0 && (
          <span className='absolute -top-1 -right-2 bg-red-600 text-xs text-white w-5 h-5 rounded-full flex justify-center items-center'>
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
