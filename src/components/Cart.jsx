import React, { useState } from 'react'
import "../styles/Cart.css";

const Cart = (props) => {
    
  return (
    <div>
      
      <div className='productRow'>
        <img src={props.image} alt={props.prodName}/>
        <h3>{props.prodName}</h3>
        <p>{props.prodPrice}</p>
        <button onClick={props.onAdd}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cart
