import React from 'react'
import SushiSanKun from '../assets/SushiSanKun.png'
const Tittle = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 text-center"><img src={SushiSanKun} alt="" /></div>
        </div>

        <div className="row">
          <div className="col-12 text-center"><h1>Sushi <strong>San-Kun</strong></h1></div>
        </div>
      </div> 
    )
}

export default Tittle
