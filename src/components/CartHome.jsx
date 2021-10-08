import React from 'react'
import Card from './Card';
import Tittle from './Tittle';
import menu from "../menu.json"
import Cart from './Cart';

const CartHome = () => {
    const loadData = () =>JSON.parse(JSON.stringify(menu));
    return (
        <div>
            <div className="SecondView">
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
