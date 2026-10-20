import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <div>
        <h2>{props.product}</h2>
        <h3>{props.price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
