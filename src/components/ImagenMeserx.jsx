import React from 'react'
import imagenMesero from '../assets/imagenMesero.png'
const  ImagenMeserx = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="text-center p-5">
            <img className="img-responsive" src={imagenMesero} alt="" />
            <div className="row">
              <div className="d-grid gap-2 col-5 mx-auto">
                <button
                  type="button"
                  className="btn btn-warning sinPadding" >
                 <p className="button-text"> Meserx </p>
                </button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


export default ImagenMeserx
