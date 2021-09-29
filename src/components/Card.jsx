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
const [numberLess,setNumberLess] = useState(setNumber);
        
            return (
                <div className="pantallaDos">
                    <TomarPedido />
                    <Titulo />
                    <div className="card mb-3 cardShadow">
          <div className="row no-gutters">
            <div className="col-md-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Tesla_the_cat_2.jpg" class="card-img" alt=""/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Gatito</h2>
                {menu.map((data, index)=>{
                    return <p key={index} className="card-text">{data.tablas.palta.descripcion}</p>
                })}
                <button onClick={() => setNumberLess(numberLess - 1)} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button onClick={() => setNumber(number + 1)} className="btn btn-warning btn-sm">+</button>
                <h3 className="float-h3">PRECIO</h3>
              </div>
            </div>
          </div>
          </div>
        </div>
            )
        }

export default Card
