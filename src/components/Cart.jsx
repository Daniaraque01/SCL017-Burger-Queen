import React from 'react'
import { useCart } from "react-use-cart"
import Modal from './Modal';

import DropDown from './DropDown';
import { collection, onSnapshot , addDoc} from '@firebase/firestore';
import db from "../configfb";
import { useHistory } from "react-router-dom";


const Cart = () => {
    const history = useHistory(); 

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
         
const send = () => {
    
sendToKitchen();  
emptyCart();      
     
}
         

    return (
        <section className = "py-4 container">
            <button onClick={history.goBack} className="btn btn-outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg></button>
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
                    <Modal name="modal1" className="btn btn-danger m-2" buttonTextShowingTheModal="Enviar a cocina" title="¿estas seguro?" description="este pedido se enviara a cocina" textCancel="Cancelar" textSend="Enviar" onClick={() => send()} />
                    <Modal name="modal2" className="btn btn-danger m-2" buttonTextShowingTheModal="eliminar comanda" title="¿estas seguro?" description="este pedido se eliminara" textCancel="Cancelar" textSend="Eliminar" onClick={() => emptyCart()}/>

                    </div>
                </div>
        </section>
    )
}

export default Cart
