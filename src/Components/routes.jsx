import Result from "../sections/Result";
import App from "../App";
import Cart from "../sections/Cart";
import ProductDetails from "../sections/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "product/:id",
                element: < ProductDetails />
            },
            {
                path: "searchresults",
                element: <Result />
            }
        ]
    },


]);

export default routes;
