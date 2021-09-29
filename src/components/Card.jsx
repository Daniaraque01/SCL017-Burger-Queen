import React from 'react';
import menu from '../menu.json';
import "bootstrap/dist/css/bootstrap.css";
import Titulo from './Titulo';
import './Card.css';
import TomarPedido from './TomarPedido';
import {useState} from 'react';

        const Card = () => {
            const loadData = () =>JSON.parse(JSON.stringify(menu));
        
const [number, setNumber] = useState(0);
const increment = () =>setNumber(number + 1);
let decrement= () => setNumber(number -1);

        
            return (
                <div className="pantallaDos">
                    <TomarPedido />
                    <Titulo />
                {menu.tablas.map((data, index)=>(
                 <div key={index} className="card mb-3 cardShadow">
                   {console.log(data)}
                 <div className="row no-gutters">
                   <div className="col-md-3">
                     <img src={data.foto} className="card-img" alt=""/>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h2 className="card-title">{data.tipo}</h2>
                     <p className="card-text">{data.descripcion}</p>
                     <button onClick={decrement} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button onClick={increment} className="btn btn-warning btn-sm">+</button>
                <h3 className="float-h3">{data.precio}</h3>
              </div>
            </div>
          </div>
          </div>
                ))}
                {menu.bebestibles.map((data, index)=>(
                 <div key={index} className="card mb-3 cardShadow">
                   {console.log(data)}
                 <div className="row no-gutters">
                   <div className="col-md-3">
                     <img src={data.foto} className="card-img" alt=""/>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h2 className="card-title">{data.tipo}</h2>
                     <p className="card-text">{data.descripcion}</p>
                     <button onClick={decrement} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button onClick={increment} className="btn btn-warning btn-sm">+</button>
                <h3 className="float-h3">{data.precio}</h3>
              </div>
            </div>
          </div>
          </div>
                ))}
        </div>
            )
        }

export default Card
