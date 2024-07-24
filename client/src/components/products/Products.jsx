import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as productsAPI from '../../api/products-api';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsAPI.getAll()
            .then(result => setProducts(result));
    }, []);

    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <div className="group relative">
                        <Link to={`/products/`} >
                            <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                                <img
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                        </Link>

                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    Apple Macbook
                                </h3>
                            </div>
                            <p className="text-lg font-medium text-gray-900">$2000</p>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <Link to={`/product/details`}>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">No products yet..</h2>
            </div>
        </div>
    );

}
