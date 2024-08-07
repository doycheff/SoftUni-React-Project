import { Link } from 'react-router-dom';

import { useGetAllProducts } from '../../hooks/useProducts';
import { useAuthContext } from '../../contexts/AuthContext';
import ProductListItem from './product-list-item/ProductListItem';

export default function Products() {
    const [products] = useGetAllProducts();
    const { isAuthenticated } = useAuthContext();

    return (
        <div >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {products.length > 0
                    ?
                    <>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">Products</h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {products.map(product => <ProductListItem key={product._id} {...product} />)}
                        </div>
                    </>
                    :
                    <div className="text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                            No products yet..
                        </h2>
                        <Link to={isAuthenticated ? "/products/create" : "/login"}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            {isAuthenticated ? "Create a product" : "Login to create a product"}
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}
