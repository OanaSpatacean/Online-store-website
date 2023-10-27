import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './navig.css'
import { useState } from 'react'
import { useEmail, EmailProvider, useEmailValue } from './EmailContext';
import { useAuth } from './AuthContext';
import Login from './login'

const Navig = ({searchbtn}) => {
    const [search, setSearch] = useState()

    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const { email } = useEmail();

  return (
    <>
    <div className='login-container'> {/* Apply a CSS class */}
        <Login email={email} />
    </div>
    
    <div className='freeShipping'>
            <div className='truckIcon'>
            <FaShippingFast/>
            </div>
        <p>Enjoy shipping at no cost for purchases over 300 RON.</p>
    </div>


    <EmailProvider>  
    <div className="mainHeader"> 
        <div className='container'>
            <div className='logo'>
                <img src='./img/logo.svg' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search the name of a product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>
            <div className='icon'>                
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                            <div className='user_icon'>                      
                                <AiOutlineUser/>
                            </div> 
                            <p>Hello, {email}!</p> 
                        </div>   
                    )
                }                    
                <div className='second_icon'>
                <Link to="/cart" className='link'><BsBagCheck/></Link>              
                </div>              
            </div>
        </div>
    </div>
    </EmailProvider>  



    <div className='header'>
        <div className='container'>
            <div className='navig'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                </ul>
            </div>           
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => setAuthenticationStatus(false)}><CiLogout /></button>
                    :
                    <Link to="/login" className="auth-link"><CiLogin /></Link>
                }                          
            </div>
        </div>
    </div>         
    </>
  )
}

export default Navig



































/*import React from 'react'

import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';

import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './navig.css'
import { useState } from 'react'

const Navig = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>

    <div className='freeShipping'>
            <div className='truckIcon'>
            <FaShippingFast/>
            </div>
        <p>Enjoy shipping at no cost for purchases over 300 RON.</p>
    </div>



    <div className="mainHeader">
        <div className='container'>
            <div className='logo'>
                <img src='./img/logo.svg' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search the name of a product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>
            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                            <div className='user_icon'>
                                <AiOutlineUser/>
                            </div> 
                            <p>Hello, {user.name}!</p> 
                        </div>   
                    )
                }                    
                <div className='second_icon'>
                <Link to="/cart" className='link'><BsBagCheck/></Link>              
                </div>              
            </div>
        </div>
    </div>



    <div className='header'>
        <div className='container'>
            <div className='navig'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                </ul>
            </div>           
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                    :
                    <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                }                          
            </div>
        </div>
    </div>



    </>
  )
}

export default Navig
*/