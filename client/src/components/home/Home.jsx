import { useEffect, useState } from "react";
import productsAPI from "../../api/products-api";
import LatestProduct from "./latest-product/LatestProduct";
import Spinner from "../spinner/Spinner";

export default function Home() {
    const [latestProducts, setLatestProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getLatest();

            setLatestProducts(result);

            setLoading(false);
        })()
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div>
                        <div className="container mx-auto py-12">
                            <h1 className="text-5xl font-extrabold text-gray-800 text-center">
                                Welcome to TechHaven
                            </h1>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-8">
                            {latestProducts.length > 0 ? "Latest Products!" : "No products yet.."}
                        </h3>
                        {latestProducts.length > 0 && (
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                                {latestProducts.map(product => (
                                    <LatestProduct key={product._id} {...product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}