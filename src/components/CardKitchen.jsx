import React from 'react'
import { useEffect , useState } from 'react'; // para importar cosas de una api o db
import { collection, onSnapshot , addDoc, query, orderBy, where} from '@firebase/firestore';
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




  /*   // aqui firebase nos hace un nuevo documento con un id
   const handleNew = async() =>{

    /*prueba para ver si se sube a fb */
  /*   const tipe = prompt("¿que tipo quieres?") 
    const quantity = prompt("¿cuantos quieres?")  
    const table = prompt("número de mesa") */

    /* const collectionRef= collection(db,"Comandas");
    const payload = {table, tipe, quantity}      /* aqui como objetos irian los datos de la tabla  */ 
  /*   await addDoc(collectionRef, payload); */ 
//    } 

    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {comandas.map(comanda =>(
                        <div key ={comanda.id} className="card m-5">
                        <div className="card-body">
                            <h1 className="card-title">Mesa {comanda.table} {/* //comanda.id */}</h1>
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
                            <button className="btn btn-success btn-lg">Listo</button>
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
