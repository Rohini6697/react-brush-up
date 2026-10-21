import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import {cart} from './data/CartProduct'

function App() {
  const name = 'Rohini';
  const fruits =['apple','mango','grapes','lemon']; 
  const ecart = [{prodName:'phone',prodPrice:23000},
                  {prodName:'laptop',prodPrice:56000}
                ];
  const [count,setCount] = useState(0);
  // const [prodName,prodPrice] = useState;
  const [cartCount,setCartCount] = useState(0);

  const handleCart = () =>{
    setCartCount(cartCount+1);
  }

  return (
    <>
      <h1>Hi My Name is {name}!</h1>
      {/* {fruits.map((fruit) => (
        <h3 key= {fruit}>Hi, {fruit}</h3>
      ))}

      {
        ecart.map((item) => (
          <ProductCard key={item.prodName} product={item.prodName} price={item.prodPrice}/>
        ))
      }
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={() => setCount(0)}>Resest</button> */}

      {/* <Cart/> */}
      <div>
        <h2>number of items in Cart : {cartCount}</h2>
      </div>
      {
        cart.map((item) => (
          <Cart key={item.prodName} {...item} onAdd={handleCart}/>
        ))
      }


    </>

    
  )
}

export default App
