import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/products'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    })

    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestProducts = Object.values(result);

    return latestProducts;
};

const getOne = (productId) => request.get(`${BASE_URL}/${productId}`);

const createProduct = (productData) => request.post(`${BASE_URL}`, productData);

const deleteProduct = (productId) => request.del(`${BASE_URL}/${productId}`);

const updateProduct = (productId, productData) => request.put(`${BASE_URL}/${productId}`, productData);

const productsAPI = {
    getAll,
    getLatest,
    getOne,
    createProduct,
    deleteProduct,
    updateProduct,
}

export default productsAPI;