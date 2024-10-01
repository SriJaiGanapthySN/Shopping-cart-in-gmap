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
import { Provider } from './sections/ShopContext';
import { navList } from './constants';
import Cart from './sections/Cart';
import ErrorBoundary from './Components/ErrorBoundary';
import Login from './Components/Authentication/Login';
import SingUp from './Components/Authentication/SignUp';
import ErrorPage from './Components/ErrorPage';

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
    errorElement: <ErrorPage />,
  },
  {
    path: "/searchresults",
    element: <Layout><Result /></Layout>,
    loader: searchLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <Layout><ProductDetails /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Layout><SingUp /></Layout>,
    errorElement: <ErrorPage />,
  }
]);


const App = () => {
  return (
    <Provider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>

    </Provider>
  );
};

export default App;