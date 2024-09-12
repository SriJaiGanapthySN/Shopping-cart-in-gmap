import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Result, { loader as searchLoader } from './sections/Result';
import ProductDetails from './sections/ProductDetails';
import Header from './sections/Header';
import Nav from './sections/Nav';
import Footer from './sections/Footer';
import TopDeals from './sections/TopDeals';
import Smartphones from './sections/Smartphones';
import Fashion from './sections/Fashion';
import Shoes from './sections/Shoes';
import { CartProvider } from './sections/CartContext';
import { navList } from './constants';
import Cart from './sections/Cart';
import ErrorBoundary from './Components/ErrorBoundary';

const Home = () => (
  <div>
    <Nav navList={navList} />
    <TopDeals />
    <Smartphones />
    <Fashion />
    <Shoes />
  </div>
);

const Layout = ({ children }) => (
  <>
    <Header />
    <div className='min-h-screen scroll-smooth'>
      <main className="pb-12">
        {children}
      </main>
    </div>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/searchresults",
    element: <ErrorBoundary><Layout><Result /></Layout></ErrorBoundary>,
    loader: searchLoader,
  },
  {
    path: "/product/:id",
    element: <Layout><ProductDetails /></Layout>,
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>,
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;