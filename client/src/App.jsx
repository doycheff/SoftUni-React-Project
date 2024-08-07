import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Products from "./components/product-list/ProductList";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductEdit from "./components/product-edit/ProductEdit";
import ProductDetails from "./components/product-details/ProductDetails";
import MyProfile from "./components/my-profile/MyProfile";
import Search from "./components/search/Search";

import { AuthContextProvider } from "./contexts/AuthContext";
import PrivateGuard from "./components/common/PrivateGuard";
import PublicGuard from "./components/common/PublicGuard";
import Error from "./components/error/Error";
// import Footer from "./components/footer/Footer";

function App() {


    return (
        <AuthContextProvider>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId/details' element={<ProductDetails />} />
                <Route path='/search' element={<Search />} />


                <Route element={<PublicGuard />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>

                <Route element={<PrivateGuard />}>
                    <Route path='/myProfile' element={<MyProfile />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/products/create' element={<ProductCreate />} />
                    <Route path='/products/:productId/edit' element={<ProductEdit />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>

            {/* <Footer /> */}
        </AuthContextProvider>
    )
}

export default App
