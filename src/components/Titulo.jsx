import React from 'react'
import SushiSanKun from '../assets/SushiSanKun.png'
const Titulo = () => {
    return (
        <div className="container">
        <div class="row">
          <div class="col-12 text-center"><img src={SushiSanKun} alt="" /></div>
        </div>

        <div class="row">
          <div class="col-12 text-center"><h1>Sushi San-Kun</h1></div>
        </div>
      </div> 
    )
}

export default Titulo
