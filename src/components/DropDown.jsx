import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react'

const DropDown = () => {

const [value,setValue]= useState('');

const handleSelect=(e)=>{
  console.log(e);
  setValue(e)
} 
  
    return (
        <div>
            <div class="dropdown" >
  <button class="btn btn-danger ms-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Mesa
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" onSelect={handleSelect} >
  <li><a class="dropdown-item"  eventKey="mesa-1" href="#">Mesa 1</a></li>
  <li><a class="dropdown-item" eventKey="mesa-2" href="#">Mesa 2</a></li>
  <li><a class="dropdown-item" eventKey="mesa-3"href="#">Mesa 3</a></li>
  <li><a class="dropdown-item" eventKey="mesa-4"href="#">Mesa 4</a></li>
  <li><a class="dropdown-item" eventKey="mesa-5"href="#">Mesa 5</a></li>
</ul>
</div>
<div>
  <p>{value}</p>
</div>          
        </div>


    )
}

export default DropDown
