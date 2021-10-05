import React from 'react';
import menu from '../menu.json';
import "bootstrap/dist/css/bootstrap.css";
import Tittle from './Tittle';
import './Card.css';
import GoBack from './GoBack';
import {useState} from 'react';
import Board from './Board';
import ContadorCarta from './ContadorCarta';
import ContadorBebestibles from './ContadorBebestibles'

        const Card = () => {
            const loadData = () =>JSON.parse(JSON.stringify(menu));

            return (
                <div className="SecondView">
                    <GoBack />
                    <Tittle />
                    <Board />
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
                <ContadorCarta/>
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
                     <ContadorBebestibles/>
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
