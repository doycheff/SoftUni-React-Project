import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login-form/Login"
import Products from "./components/products/all-products/Products"
import Register from './components/register-form/Register'
import CreateProduct from './components/products/create-product/CreateProduct'
import ProductDetails from './components/products/all-products/product-details/ProductDetails'
import Footer from './components/footer/Footer'

function App() {

    return (
        <>
            <Header />

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId' element={<ProductDetails />} />

                <Route path='/create' element={<CreateProduct />} />
                

            </Routes>

            {/* <Footer /> */}
        </>
    )
}

export default App
