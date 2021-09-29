import React from 'react';
import menu from '../menu.json';
import "bootstrap/dist/css/bootstrap.css";
import Titulo from './Titulo';
import './Card.css';
import TomarPedido from './TomarPedido';

        const Card = () => {
            const loadData = () =>JSON.parse(JSON.stringify(menu));
        
            return (
        
                <div className="card mb-3 cardShadow pantallaDos">
                    <TomarPedido />
                    <Titulo />
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
                <button className="btn btn-warning btn-sm">-</button>
                <button className="btn btn-warning btn-md">0</button>
                <button className="btn btn-warning btn-sm">+</button>
                <h3 className="float-h3">PRECIO</h3>
              </div>
            </div>
          </div>
        </div>
            )
        }

export default Card
