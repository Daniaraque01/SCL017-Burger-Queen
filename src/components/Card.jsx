import React from 'react';
import { useCart } from 'react-use-cart';
import menu from '../menu.json';
import "bootstrap/dist/css/bootstrap.css";
import Tittle from './Tittle';
import './Card.css';
import GoBack from './GoBack';
import Board from './Board';
import {useState} from 'react';

        const Card = (props) => {
          //  const loadData = () =>JSON.parse(JSON.stringify(menu));

  const { addItem } = useCart();
        
/*const [number, setNumber] = useState(0);
const increment = () =>setNumber(number + 1);
let decrement= () => setNumber(number -1);*/

        
            return (
                <div className="SecondView">
                    {/* <GoBack />
                    <Tittle />
                    <Board /> */}
                {/* {menu.tablas.map((data, index)=>( */}
                 <div /* item = {data} key={index}  */className="card mb-3 cardShadow">
                   {/* {console.log(data)} */}
                 <div className="row no-gutters">
                   <div className="col-md-3">
                     <img src={props.img} className="card-img" alt=""/>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h2 className="card-title">{props.title}</h2>
                     <p className="card-text">{props.desc}</p>
                     <h3 className="float-h3">${props.price}</h3>
                     <button className="btn btn-warning btn-lg" onClick= {() => addItem(props.item)}>Añadir</button>
                    {/*  <button onClick={decrement} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button onClick={increment} className="btn btn-warning btn-sm">+</button> */}
              </div>
            </div>
          </div>
          </div>
                {/* ))} */}
               {/*  {menu.bebestibles.map((data, index)=>(
                 <div key={index} className="card mb-3 cardShadow">
                   {console.log(data)}
                 <div className="row no-gutters">
                   <div className="col-md-3">
                     <img src={data.foto} className="card-img" alt=""/>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h2 className="card-title">{data.tipo}</h2>
                     <p className="card-text">{data.descripcion}</p> */}
                     {/* <button id="decrement-bebestibles" onClick={decrement} className="btn btn-warning btn-sm">-</button>
                <h3>{number}</h3>
                <button id="increment-bebestibles"onClick={increment} className="btn btn-warning btn-sm">+</button> */}
               {/*  <button className="btn btn-warning btn-lg" onClick= {()=>addItem(data.id.item)}>Añadir</button>
                <h3 className="float-h3">{data.precio}</h3>
              </div>
            </div>
          </div>
          </div>
                ))} */}
        </div>
            )
        }

export default Card
