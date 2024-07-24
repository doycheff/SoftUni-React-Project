import { useEffect, useState } from "react";
import productsAPI from "../../api/products-api";
import LatestProduct from "./latest-product/LatestProduct";

export default function Home() {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        (async () => {
            // TODO: modify to fetch only latest products
            const result = await productsAPI.getAll();

            setLatestProducts(result.reverse().slice(0, 3));
        })()
    }, []);

    return (
        <div >
            <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-8">
                    {latestProducts.length > 0 ? "Latest Products" : "No products yet.."}
                </h2>
                {latestProducts.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {latestProducts.map(product => (
                            <LatestProduct key={product._id} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}