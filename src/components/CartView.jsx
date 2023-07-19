import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

export const CartView = ({ items, handlerDelete }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(calculateTotal(items));
        sessionStorage.setItem('cart', JSON.stringify(items));
    },[items])

    const onDeleteProduct = (id) => {
        handlerDelete(id);
    }

    return (
        <>
            <h3>Carro de Compra</h3>
            <table className="table table-hover trable striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(i => (
                        <tr key={i.product.id}>
                            <td>{i.product.name}</td>
                            <td>{i.product.price}</td>
                            <td>{i.quantity}</td>
                            <td>{i.product.price * i.quantity}</td>
                            <td><button className="btn btn-danger" onClick={() => onDeleteProduct(i.product.id)}>eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}