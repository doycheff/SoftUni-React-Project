import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/products'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

const getLatest = async () => {    
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);

    const latestProducts = Object.values(result);

    return latestProducts;
};

const getUserProducts = async (_ownerId) => {
    const urlSearchParams = new URLSearchParams({
        where: `_ownerId="${_ownerId}"`,
    })
    
    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const productsUser = Object.values(result);
    
    return productsUser;
}

const searchProducts = async (query) => {
    const result = await request.get(`${BASE_URL}?where=name%20LIKE%20%22${query}%22`)

    const searchedProducts = Object.values(result);

    return searchedProducts;
}

const getOne = (productId) => request.get(`${BASE_URL}/${productId}`);

const createProduct = (productData) => request.post(`${BASE_URL}`, productData);

const deleteProduct = (productId) => request.del(`${BASE_URL}/${productId}`);

const updateProduct = (productId, productData) => request.put(`${BASE_URL}/${productId}`, productData);

const productsAPI = {
    getAll,
    getLatest,
    getUserProducts,
    getOne,
    createProduct,
    deleteProduct,
    updateProduct,
    searchProducts
}

export default productsAPI;