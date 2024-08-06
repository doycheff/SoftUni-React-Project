import { useState } from 'react';

import ProductListItem from "../product-list/product-list-item/ProductListItem";

import productsAPI from '../../api/products-api';

export default function Search() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        const results = await productsAPI.searchProducts(query);

        setProducts(results);
    };

    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={handleSearch}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Laptop, Smartphone, Tablet..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required=""

                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>

            <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {products.length === 0 ? (
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">
                        No products yet..
                    </h2>
                ) : (
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {products.map(product => (
                            <ProductListItem key={product._id} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}