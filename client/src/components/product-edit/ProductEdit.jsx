import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useCreateProduct, useGetOneProduct } from "../../hooks/useProducts";
import productsAPI from "../../api/products-api";

export default function ProductEdit() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product] = useGetOneProduct(productId);

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(product, async (values) => {
        await productsAPI.updateProduct(productId, values);

        navigate(`/products/${productId}/details`);
    });

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={submitHandler}
                className="w-full max-w-lg bg-gray-200 p-8 rounded-lg"
            >
                <div className="grid gap-6 mb-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            value={values.name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            autoComplete="category"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            value={values.category}
                            onChange={changeHandler}
                        >
                            <option value="">Select category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Tablet">Tablet</option>
                        </select>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            value={values.price}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            value={values.description}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
                            htmlFor="image"
                        >
                            Image URL
                        </label>
                        <input
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="image"
                            type="text"
                            name="image"
                            value={values.image}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );

}
