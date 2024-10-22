// import React from 'react';
// import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
// import Details from './pages/Details';
// import Layout from './components/Layout';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={Home} />
//           <Route path="/about" element={Details} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Layout from './components/Layout';
import Carts from './pages/Carts';
import { CartProvider } from 'react-use-cart';

const App = () => {
  
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path={`/details/:slug`} element={<Details />} />
            <Route path="/carts" element={<Carts />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;

