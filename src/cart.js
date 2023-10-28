import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart, setCart}) => {
    // increace qty
    const incqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
        }))
    }

    // Dec Qty
    const decqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
        }))
    }
    //Remove cart product
    const removeproduct = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
    // Total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
        {cart.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Your cart is empty.</h2>
        <Link to='/product' className='emptycartbtn'>Feel free to start shopping now!</Link>
        </div>
        }
        <div className='contant'>
            {
                cart.map((curElm) => 
                {
                    return(
                        <div className='cart_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Price: {curElm.Price} RON</p>
                                <div className='qty'>
                                    <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                    <input type='text' value={curElm.qty}></input> 
                                    <button className='incqty' onClick={() => incqty(curElm)}>+</button>                               
                                </div>
                                <h4 className='subtotal'>subtotal: {curElm.Price * curElm.qty} RON</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: {Totalprice} RON</h2>
            <Link to='/checkout' className='checkout'>Checkout</Link>
            </>
        }
    </div>
    </>
  )
}

export default Cart