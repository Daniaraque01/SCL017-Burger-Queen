import React from 'react'
import { useHistory } from "react-router-dom";
import SushiSanKun from '../assets/SushiSanKun.png'
import Home from './Home'
const Tittle = () => {
    return (
        <div className="container">
        <div className="row">
        <Home />
          <div className="col-12 text-center"><img src={SushiSanKun} alt=""/></div>
        </div>
        <div className="row">
          <div className="col-12 text-center"><h1>Sushi <strong>San-Kun</strong></h1></div>
        </div>
      </div> 
    )
}

export default Tittle
