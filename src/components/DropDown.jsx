import React from 'react'

const DropDown = ({test, table}) => {
  
    return (
        <div>
          <div className="bg-white">
            <div class="dropdown">
  <button class="btn btn-danger ms-2 dropdown-toggle" type="button" id="dropdownMenuButton1" /* onSelect={handleSelect}  */ data-bs-toggle="dropdown" aria-expanded="false">
  Mesa
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" /* onSelect={handleSelect} */>
  <li><a class="dropdown-item" onClick={test} id="1" >Mesa 1</a></li>
  <li><a class="dropdown-item" onClick={test} id="2" >Mesa 2</a></li>
  <li><a class="dropdown-item" onClick={test} id="3" >Mesa 3</a></li>
  <li><a class="dropdown-item" onClick={test} id="4" >Mesa 4</a></li>
  <li><a class="dropdown-item" onClick={test} id="5" >Mesa 5</a></li>
</ul>
</div>
            
              <p className="text-end">Mesa: {table}</p>
            </div>
        </div>


    )
}

export default DropDown
