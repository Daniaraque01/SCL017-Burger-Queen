import React from 'react'
import { useCart } from "react-use-cart"
import Modal from './Modal';

import DropDown from './DropDown';
import { collection, onSnapshot , addDoc} from '@firebase/firestore';
import db from "../configfb";


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
    if (isEmpty) return <h1 className="text-center">No hay Pedidos</h1>


          const sendToKitchen = async ()=>{
         const collectionRef= collection(db,"Comandas");
         const payload = {items}      /* aqui como objetos irian los datos de la tabla  */ 
          await addDoc(collectionRef, payload); 
          }
         


         

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
                    <Modal name="modal1" className="btn btn-danger m-2" buttonTextShowingTheModal="Enviar a cocina" title="¿estas seguro?" description="este pedido se enviara a cocina" textCancel="Cancelar" textSend="Enviar" />
                    <Modal name="modal2" className="btn btn-danger m-2" buttonTextShowingTheModal="eliminar comanda" title="¿estas seguro?" description="este pedido se eliminara" textCancel="Cancelar" textSend="Eliminar" onClick={() => emptyCart()}/>

                    </div>
                </div>
        </section>
    )
}

export default Cart
