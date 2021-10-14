import React from 'react'
import Card from './Card';
import Tittle from './Tittle';
import menu from "../menu.json"
import Cart from './Cart';

const CartHome = () => {
    return (
        <div class="SecondView">
              <div class="row">
    <div class="col">
    <Tittle />
    </div>

  </div>
  <div class="row">
    <div class="col-4">
    {menu.todoMenu.map((item, index)=>(
                    <Card  img= {item.foto} title ={item.tipo} desc={item.descripcion} price={item.price} item={item} key= {index}/>
                    ))}
    </div>
    <div class="col-8">
    <Cart />

    </div>
  </div>

</div>
      
    )
}

export default CartHome
