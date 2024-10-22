import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";


const Header = () => {
  const {
    totalItems,
} = useCart();
  return (
    <header className="flex justify-between items-center p-4 bg-zinc-300 border-b sticky top-0" tabIndex={0}>
      <div className="flex items-center">
        <img src='' alt="Logo" className="h-10" />
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-black text-xl cursor-pointer font-medium hover:text-blue-800">Home</Link>
      </nav>
      <Link to={'/carts'} className="flex items-center relative">
        <FiShoppingCart className="h-8 text-xl" />
        <span className='absolute top-2/3 right-1/2 bg-red-600 text-sm text-white w-5 h-5 rounded-full justify-center items-center flex'>{totalItems}</span>
      </Link>
    </header>
  );
};

export default Header;
