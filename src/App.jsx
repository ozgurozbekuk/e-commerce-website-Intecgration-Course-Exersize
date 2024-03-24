import React, { useEffect, useState } from 'react'
import Header from "./components/header/Header"
import Products from "./components/products/Products"


function App() {

    const [products,setProducts] = useState([]);
    const [cartCounter,setCartCounter] = useState(0)

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data.products)
        })
    },[])

    function handleAddCart() {
      setCartCounter(prev => prev + 1)
    }
  return (
    <div>
      <Header cartCounter={cartCounter}/>
      <Products products={products} addCart={handleAddCart}/>
    </div>
  
  )
}

export default App
