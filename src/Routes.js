import React from "react";
import {useRoutes} from "react-router-dom"
import TvsList from "./components/TvsList/TvsList";
import PhonesList from "./components/PhonesList/PhonesList";
import NotebooksList from "./components/NotebooksList/NotebooksList";
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order"

const MyRoutes = () => {
    return (
        useRoutes([
            {
                element: <Main/>,
                path: "/",
            },
            {
                path: "phone",
                element: <PhonesList/>,
            },
            {
                path: "phone/:id",
                element: <ProductDetails/>
            },
            {
                path: "notebook",
                element: <NotebooksList/>,
            },
            {
                path: "notebook/:id",
                element: <ProductDetails/>
            },
            {
                path: "tv",
                element: <TvsList/>,
            },
            {
                path: "tv/:id",
                element: <ProductDetails/>,
            },
            {
                path: "/order",
                element: <Order/>,
            },
            {
                path: "*",
                element: <h1>PAGE NOT FOUND!</h1>
            }
        ])
    )
}
export default MyRoutes