import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Products_1';
import Details from './pages/Details';
// import Layout from './components/Layout';
import Carts from './pages/Carts';
import { CartProvider } from 'react-use-cart';
import HomePage from './pages/HomePage';
import Nav from './components/Nav/Nav';
// import AllProductPage from './pages/AllProductPage';
import ArrivalProductPage from './pages/ArrivalProductPage';
import Wishlist from './components/Products/Wishlist';
import BlogPage from './pages/BlogPage';

const App = () => {
  
  return (
    <Router>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ArrivalProductPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/details" element={<Details />} />
          <Route path='/shop/:slug' element={<Details />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
