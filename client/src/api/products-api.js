import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/products'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}