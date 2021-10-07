import React from 'react'
import { useCart } from "react-use-cart"
import DropDown from './DropDown';
const Cart = () => {
    const { 
            isEmpty,
            totalUniqueItems,
            items,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart,
         } = useCart();
         if(isEmpty) return <h1 className = "text-center">No hay Pedidos</h1>

    return (
        <section className = "py-4 container">
         <div className="row justify-content-center">
            <div className="col-12">
                <h5>Productos totales ({totalUniqueItems})</h5>
                <DropDown />
                <table className="table table-light table-hover m-0">
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                        <tr key={index}>
                            <td>
                                <img src= {item.foto} style={{height:'6rem'}} />
                            </td>
                            <td>{item.tipo}</td>
                            <td>{item.price}</td>
                            <td>X{item.quantity}</td>
                            <td>
                                <button className="btn btn-warning ms-2" onClick={()=> updateItemQuantity(item.id , item.quantity -1)}>-</button>
                                <button className="btn btn-warning ms-2" onClick={()=> updateItemQuantity(item.id , item.quantity +1)}>+</button>
                                <button className="btn btn-danger ms-2" onClick={()=> removeItem(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                     )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="col-6">
                <p className="text-end fs-3">Total a Pagar: ${cartTotal}</p>
            </div>
            <div className="col-auto">
                <button className="btn btn-success btn-sm m-2" type= "submit">Enviar a Cocina</button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>emptyCart()}>Eliminar Comanda</button>
            </div>
         </div>
        </section>
    )
}

export default Cart
