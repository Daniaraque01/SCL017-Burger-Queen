import React from 'react'
import { useCart } from "react-use-cart"
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
                                <button className="btn btn-dark ms-2" onClick={()=> updateItemQuantity(item.id , item.quantity -1)}>-</button>
                                <button className="btn btn-dark ms-2" onClick={()=> updateItemQuantity(item.id , item.quantity +1)}>+</button>
                                <button className="btn btn-danger ms-2" onClick={()=> removeItem(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                     )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="col-auto ms-auto">
                <h2>Total a Pagar : ${cartTotal}</h2>
            </div>
            <div className="col-auto">
                <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Eliminar Comanda</button>
            </div>
         </div>
        </section>
    )
}

export default Cart
