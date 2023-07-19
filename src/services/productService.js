import { products } from "../data/products"

export const getProducts = () => {
    return products;
}

export const calculateTotal = (items) => {
    return items.reduce((acumm, i) => acumm + i.product.price * i.quantity, 0);
}