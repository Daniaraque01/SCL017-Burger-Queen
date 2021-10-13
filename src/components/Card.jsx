import React from 'react';
import { useCart } from 'react-use-cart';
import "bootstrap/dist/css/bootstrap.css";
import './Card.css';
import GoBack from './GoBack';
import { useState } from 'react';


const Card = (props) => {
  const { addItem } = useCart();

            return (
                <div className="d-flex SecondView" >
                 
                 <div className="sizeImg card  mb-3 cardShadow">
                 <div className="row">
                   <div className="col-md-3">
                     <img src={props.img} className="card-img" alt=""/>
                   </div>
                   <div className="col-md-9">
                     <div className="card-body">

                       <h2 className="card-title">{props.title}</h2>
                     <p className="card-text">{props.desc}</p>
                     <h3 className="float-h3">${props.price}</h3>
                     <button className="btn btn-warning btn-lg" onClick= {() => addItem(props.item)}>Añadir</button>
                     </div>
            </div>
          </div>
          </div>
        </div>
            )
        }


export default Card
