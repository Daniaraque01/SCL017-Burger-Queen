import React from 'react'
import { useCart } from "react-use-cart"
import Modal from './Modal';
import DropDown from './DropDown';
import { collection, onSnapshot , addDoc, serverTimestamp, Timestamp} from '@firebase/firestore';
import db from "../configfb";
import { useHistory } from "react-router-dom";
import { Fragment } from 'react';
import logoTwo from './LogoTwo';

const Cart = ({value}) => {
     

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

    const getDate = () => {
        const today = new Date();
        const date = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
        const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const totalDate = `${hour} ${date}`;
        return totalDate;
      };

// localstorage, sessionstorage
      const getValueOption = () =>{

      }

          const sendToKitchen = async ()=>{
         /*const timestamp = Timestamp.toDate() Timestamp.fromDate(new Date()) */
         const collectionRef= collection(db,"Comandas");
         const payload = {items, timestamp: serverTimestamp(), time:getDate()}      /* aqui como objetos irian los datos de la tabla  */ 
          await addDoc(collectionRef, payload); 
          }
         
       

const send = () => {
    
sendToKitchen();  
emptyCart();      
     
}
         

    return (
    
        <section className = "py-4 container">
         <div className="row justify-content-center">
            <div className="col-12">
            <logoTwo/>
                <h5>Productos totales ({totalUniqueItems})</h5>
                <DropDown />
                <table className="table table-light table-hover m-0">
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                            
                        <tr key={index}>
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
