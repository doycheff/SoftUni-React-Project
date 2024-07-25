import { useEffect, useState } from 'react';

import productsAPI from "../api/products-api";

export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getAll();

            setProducts(result);
        })()
    }, []);

    return [products, setProducts];
}