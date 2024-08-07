import { Link } from "react-router-dom";

export default function ProductListItem({
    _id,
    name,
    price,
    image
}) {
    return (
        <div className=" transition-transform transform hover:scale-105 group relative bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${_id}/details`} >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden lg:h-80 ">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover object-center w-full h-full"
                        style={{ backgroundColor: 'transparent' }} 
                    />
                </div>
            </Link>
            <div className="p-4">
                <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                        {name}
                    </h3>
                    <p className="text-lg font-medium text-gray-900">${price}</p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Link to={`/products/${_id}/details`}>
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                            transition-transform transform hover:scale-105"
                        >
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
