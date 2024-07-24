import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import productsAPI from '../../api/products-api';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOne(productId);

            setProduct(result);
        })()
    }, [])


    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <div className="px-4 sm:px-0 text-center">
                    <h3 className="text-2xl font-semibold leading-7 text-gray-900">{product.name}</h3>
                </div>
                <div className="mt-6 border-t border-gray-200">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-6 flex justify-center">
                            <img
                                src={product.image}
                                className="rounded-lg shadow-md object-cover h-60 w-60"
                            />
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2 text-center sm:text-center">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Category:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.category}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2 text-center sm:text-center">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Price:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${product.price}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2 text-center sm:text-center">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Description:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {product.description}
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-4 flex justify-center space-x-4">
                        <button
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Delete
                        </button>
                        <Link to={`/product/${productId}/edit`}>
                            <button
                                type="button"
                                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );



}
