import React from 'react'
import { useEffect , useState } from 'react'; // para importar cosas de una api o db
import { collection, onSnapshot , query, orderBy} from '@firebase/firestore';
import db from "../configfb";


const CardKitchen = () => {

// aqui traemos la data que hay en firebase
   const [comandas, setComandas] = useState([])
   console.log(comandas)

    useEffect(
        ()=>{
            const collectionRef = collection(db, "Comandas")
            const q = query(collectionRef,/*  where("tipo", "==", true) */ orderBy("timestamp" , "desc") )
             /* const arrayQuery = collectionRef.where("items","array-contains") */
        
            const snapShot= onSnapshot(q,(snapshot) =>
            setComandas(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })))
        );

        return snapShot
    }, []);


    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {comandas.map(comanda =>(
                        <div key ={comanda.id} className="card m-5">
                        <div className="card-body">
                            <h1 className="card-title">Mesa {comanda.table} </h1>
                            <h2 className="card-title text-end">{comanda.time}</h2>
                            <hr/>
                            <h3 className="card-subtitle mb-2 text-center">Pedido</h3>
                            {comanda.items.map(({ tipo, quantity, timestamp }) => (
                            <ul>
                                <li className="card-text fs-3"> 
                                <p>{tipo} x{quantity}</p>
                                </li>
                                {/* <li className="card-text fs-3">
                                {quantity}
                                </li> */}
                            </ul>
                            ))}
                            {/* <p className="card-text">{comanda.tipe}: {comanda.quantity}</p> */}
                           <div className="d-md-flex justify-content-md-end"> <button className="me-md-2 btn btn-success btn-lg">Listo</button></div>
                            {/* <button className="btn btn-success btn-lg m-2"  onClick={handleNew} >Enviar a firebas(Prueba)</button> */}
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
        )
        }


export default CardKitchen
