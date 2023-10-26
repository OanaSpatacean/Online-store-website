import React, {useState} from 'react'
import Navig from './navig'
import Rout from './rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';

const App = () => {
  // add to cart
  const [cart, setCart] = useState([])
  //product Detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  const addtocart = (product) => 
  {
    const exsit = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This product has already been added to your cart.")
    }
    else
    { 
      setCart([...cart, {...product, qty:1}])
      alert("The product has been successfully added to your cart.")
    }
  } 
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Navig searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App