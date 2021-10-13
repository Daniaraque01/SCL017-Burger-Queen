import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react'

const DropDown = ({test, table}) => {

  /* const [value,setValue]= useState('');

  const test =(e) =>{
    setValue(e.target.id)
    console.log(e.target.id)
  } */
/* const getSelectedValue = () =>{
 document.getElementById("dropDownMesas").value; 
 console.log(getSelectedValue)
} */
/* const [value,setValue]= useState('');

const handleSelect=(e)=>{
  console.log(e);
  setValue(e)
} */
  
    return (
        <div>
          <div className="bg-white">
            <div class="dropdown">
  <button class="btn btn-danger ms-2 dropdown-toggle" type="button" id="dropdownMenuButton1" /* onSelect={handleSelect}  */ data-bs-toggle="dropdown" aria-expanded="false">
  Mesa
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" /* onSelect={handleSelect} */>
  <li><a class="dropdown-item" onClick={test} id="1" href="#">Mesa 1</a></li>
  <li><a class="dropdown-item" onClick={test} id="2" href="#">Mesa 2</a></li>
  <li><a class="dropdown-item" onClick={test} id="3" href="#">Mesa 3</a></li>
  <li><a class="dropdown-item" onClick={test} id="4" href="#">Mesa 4</a></li>
  <li><a class="dropdown-item" onClick={test} id="5" href="#">Mesa 5</a></li>
</ul>
</div>
            
              <p className="text-end">Mesa: {table}</p>
            </div>
        </div>


    )
}

export default DropDown
