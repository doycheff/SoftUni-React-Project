import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Products from "./components/product-list/ProductList";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductDetails from "./components/product-details/ProductDetails";

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId/details' element={<ProductDetails />} />

                <Route path='/products/create' element={<ProductCreate />} />

            </Routes>
        </>
    )
}

export default App
