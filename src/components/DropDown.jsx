import React from 'react'
import { Fragment } from 'react'

const DropDown = () => {

/* const getSelectedValue = () =>{
 document.getElementById("dropDownMesas").value; 
 console.log(getSelectedValue)
} */


  
    return (
        <div>
            <div class="dropdown" id="dropDownMesas" /* onChange={getSelectedValue} */>
  <button type="button" class="btn btn-primary dropdown-toggle"  data-toggle="dropdown"> {/* deberia ser un select */}
    Mesa
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" value= "mesa1" href="#">Mesa 1</a>
    <a class="dropdown-item" value = "mesa2" href="#">Mesa 2</a>
    <a class="dropdown-item" value= "mesa3" href="#">Mesa 3</a>
  </div>
</div>
            
        </div>
    )
}

export default DropDown
