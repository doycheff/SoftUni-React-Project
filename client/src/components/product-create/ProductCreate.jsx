import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateProduct } from "../../hooks/useProducts";
import { productValidator } from "../../utils/productValidator";

const initialValues = {
    name: '',
    category: '',
    price: '',
    description: '',
    image: ''
};

export default function ProductCreate() {
    const navigate = useNavigate();
    const createProduct = useCreateProduct();

    const createHandler = async (values) => {
        try {
            const { _id: productId } = await createProduct(values);
            navigate(`/products/${productId}/details`);
        } catch (err) {
            setErrors({ general: err.message });
        }
    };

    const {
        values,
        errors,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler, productValidator);

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
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            value={values.name}
                            onChange={changeHandler}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.category ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
                            value={values.category}
                            onChange={changeHandler}
                        >
                            <option value="">Select category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Tablet">Tablet</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                        )}
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className={`bg-white border ${errors.price ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            value={values.price}
                            onChange={changeHandler}
                        />
                        {errors.price && (
                            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className={`bg-white border ${errors.description ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            value={values.description}
                            onChange={changeHandler}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                        )}
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900"
                            htmlFor="image"
                        >
                            Image URL
                        </label>
                        <input
                            className={`bg-white border ${errors.image ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            id="image"
                            type="text"
                            name="image"
                            value={values.image}
                            onChange={changeHandler}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
                        )}
                    </div>
                </div>
                {errors.general && (
                    <div className="mb-4 text-sm text-red-500">
                        {errors.general}
                    </div>
                )}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
