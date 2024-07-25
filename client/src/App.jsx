import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Products from "./components/product-list/ProductList";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductDetails from "./components/product-details/ProductDetails";
import { AuthContext } from "./contexts/AuthContext";

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId/details' element={<ProductDetails />} />

                <Route path='/products/create' element={<ProductCreate />} />

            </Routes>
        </AuthContext.Provider>
    )
}

export default App
