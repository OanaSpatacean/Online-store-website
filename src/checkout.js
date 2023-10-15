import React, { useState } from 'react'
import './checkout.css'
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillBagCheckFill } from 'react-icons/bs';

const Checkout = () => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Adress: '', Phone: '', Number: '', Expire: '', CVV: ''
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async (e) => 
    {
        const{ Name, Adress, Phone, Number, Expire, CVV} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Adress, Phone, Number, Expire, CVV
            })
        }
        const res = await fetch('https://online-store-checkout-default-rtdb.europe-west1.firebasedatabase.app/Message.json', options)
        console.log(res)
        if(res)
        {
            alert("Your order was sent!")
        }
        else
        {
            alert("An error has occured, please check if any of the fields are empty!")
        }
    }
  return (
    <>
    <div className='checkout_container'>
        <div className='contant'>
            <h2>Checkout <BsFillBagCheckFill/></h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
                    <input type='text' name='Adress' value={users.Email} placeholder='Enter The Delivery Adress'  autoComplete='off' onChange={data}></input>
                    <input type='text' name='Phone' value={users.Email} placeholder='Enter Your Phone Number'  autoComplete='off' onChange={data}></input>
                    <input type='text' name='Number' value={users.Subject} placeholder='Enter Your Credit Card Number'  autoComplete='off' onChange={data}></input>
                    <input type='text' name='Expire' value={users.Subject} placeholder='Enter Your Credit Card Expire Date'  autoComplete='off' onChange={data}></input>
                    <textarea name='CVV' value={users.Message} placeholder='Enter Your Credit Card CVV'  autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ? 
                        <button type='submit' onClick={senddata}>Place order</button>
                        : <button type='submit' onClick={() => loginWithRedirect()}>Login to Place Order</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout