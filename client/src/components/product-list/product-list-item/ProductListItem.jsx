import { Link } from "react-router-dom";

export default function ProductListItem({
    _id,
    name,
    price,
    image
}) {
    return (
        <div className="group relative">
            <Link to={`/products/${_id}/details`} >
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                    <img
                        src={image}
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            </Link>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        {name}
                    </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">${price}</p>
            </div>

            <div className="mt-4 flex justify-center">
                <Link to={`/product/${_id}/details`}>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
}