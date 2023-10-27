import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Checkout from './checkout'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
          <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout