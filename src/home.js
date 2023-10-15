import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './home.css'

const Home = () => {
  return (
    <>
    <div className='topBanner'>
        <div className='container'>
            <div className='detail'>
                <Link to="/product">Shop now <BsArrowRight/></Link>
            </div>
            <div className='imageBox'>
                <img src='/img/home.jpg' alt='home'></img>
            </div>
            <h2>Top fashion picks for this season</h2>
            <p>Elevate Your Style: Unleash Your Confidence with ShoppingWave</p>
        </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Membership Benefits</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Oder above 300 RON</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Assistance</h3>
            <p>24/7</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return and refund policy</h3>
            <p>Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/amazingproducts.png' alt='amazing'></img>
          </div>
          <div className='detail'>
            <p>Amazing products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/softmaterials.webp' alt='soft'></img>
          </div>
          <div className='detail'>
            <p>Soft materials</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/brightcolours.jpg' alt='colours'></img>
          </div>
          <div className='detail'>
            <p>Bright colours</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/lateststyle.jpg' alt='style'></img>
          </div>
          <div className='detail'>
            <p>Latest style</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home