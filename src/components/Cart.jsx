import React, { useState } from 'react'
import "../styles/Cart.css";

const Cart = (props) => {
    const [cartCount,setCartCount] = useState(0);
  return (
    <div>
      
      <div className='productRow'>
        <img src={props.image} alt={props.prodName}/>
        <h3>{props.prodName}</h3>
        <p>{props.prodPrice}</p>
        <button onClick={()=>setCartCount(cartCount+1)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cart
