import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/products'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

const getOne = (productId) => request.get(`${BASE_URL}/${productId}`);

const createProduct = (data) => request.post(`${BASE_URL}`, data);

const deleteProduct = async (productId) => await request.del(`${BASE_URL}/${productId}`);

const productsAPI = {
    getAll,
    getOne,
    createProduct,
    deleteProduct
}

export default productsAPI;