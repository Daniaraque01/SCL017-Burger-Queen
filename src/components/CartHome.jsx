import React from 'react'
import Card from './Card';
import GoBack from './GoBack';
import Tittle from './Tittle';
import Board from './Board';
import menu from "../menu.json"
import Cart from './Cart';

const CartHome = () => {
    const loadData = () =>JSON.parse(JSON.stringify(menu));
    return (
        <div>
            <div className="SecondView">
                    <GoBack />
                    <Tittle />
                    <Cart />
                    {menu.todoMenu.map((item, index)=>(
                    <Card  img= {item.foto} title ={item.tipo} desc={item.descripcion} price={item.price} item={item} key= {index}/>
                    ))}
            </div>
        </div>
    )
}

export default CartHome
