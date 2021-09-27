import React from 'react'
import Cocinero from '../assets/Cocinero.png'
const  ImagenCocinerx = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="text-center p-5">
            <img className="img-responsive" src={Cocinero} alt="" />
            <div className="row">
              <div className="d-grid gap-2 col-5 mx-auto">
                <button
                  type="button"
                  className="btn btn-warning sinPadding" >
                 <p className="button-text"> Cocinerx </p>
                </button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


export default ImagenCocinerx
