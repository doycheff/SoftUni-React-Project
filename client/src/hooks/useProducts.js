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

    return [
        products,
        setProducts
    ];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOne(productId);

            setProduct(result);
        })()
    }, [productId])

    return [
        product,
        setProduct
    ];
}