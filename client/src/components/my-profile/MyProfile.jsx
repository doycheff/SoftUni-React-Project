import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import productsAPI from "../../api/products-api";
import { useAuthContext } from "../../contexts/AuthContext";

export default function MyProfile() {
    const { userId } = useAuthContext();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsAPI.getUserProducts(userId)
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, [userId]);

    const deleteProduct = async (productId) => {
        try {
            await productsAPI.deleteProduct(productId);

            setProducts(products.filter(product => product._id !== productId));
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">
                {products.length > 0 ? 'My created products' : 'No created products yet...'}
            </h2>
            {products.length > 0 && (
                <ul role="list" className="divide-y divide-gray-100">
                    {products.map((product) => (
                        <li key={product._id} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img
                                    alt={product.name}
                                    src={product.image}
                                    className="h-32 w-34 flex-none rounded-lg bg-gray-50 object-cover"
                                />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-md font-semibold leading-6 text-gray-900">{product.name}</p>
                                    <p className="mt-1 font-semibold text-md leading-6 text-gray-700">${product.price}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-800">{product.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link to={`/products/${product._id}/details`}>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                        transition-transform transform hover:scale-105"
                                    >
                                        Details
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => deleteProduct(product._id)}
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-transform transform hover:scale-105"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
