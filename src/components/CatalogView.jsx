import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const findAll = async() => {
        const productosBackend = await getProducts();
        setProducts(productosBackend);
        setIsLoading(false);
    }

    useEffect(
        () => {
            findAll();
        }, []
    )

    return (
        <>
            {
                isLoading && 
                <div className="alert alert-info">Cargando ...</div>
            }
            <div className="row">
                {products.map(p => (
                    <div className="col-4 my-2" key={p.id}>
                        <ProductCardView 
                        handler={handler} 
                        id={p.id} 
                        name={p.name} 
                        description={p.description} 
                        price={p.price} />
                    </div>
                ))}
            </div>

        </>
    )
}