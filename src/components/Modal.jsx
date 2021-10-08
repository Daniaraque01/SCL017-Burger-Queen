import React, { Fragment } from 'react'
import { useCart } from "react-use-cart"

const Modal = ({ title, description, textCancel, textSend, buttonTextShowingTheModal , className, name}) => {
 const {
  emptyCart
  
 } = useCart();

  return (
    <Fragment>
      <button type="button" className= {className} data-bs-toggle="modal" data-bs-target= {"#" + name}>
        {buttonTextShowingTheModal} 
      </button>


      <div className="modal fade" id={name} tabIndex="-1" aria-labelledby={name + "Label"} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={name + "Label"}
              >{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {description}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{textCancel}</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => emptyCart()}>{textSend}</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal