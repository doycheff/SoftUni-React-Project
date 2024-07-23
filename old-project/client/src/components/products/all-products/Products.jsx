import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const response = await fetch('http://localhost:3030/jsonstore/products', {
                    signal: abortController.signal
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setProducts(Object.values(result));
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error: ', error);
                }
            }
        })();

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product._id} className="group relative">
                            <Link to={`/products/${product._id}`} 
                            key={product._id}>
                                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                                    <img
                                        alt={product.name}
                                        src={product.image}
                                        className="object-cover object-center w-full h-full"
                                    />
                                </div>
                            </Link>

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {product.name}
                                    </h3>
                                </div>
                                <p className="text-lg font-medium text-gray-900">${product.price}</p>
                            </div>

                            <div className="mt-4 flex justify-center">
                                <Link to={`/products/${product._id}`}>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
