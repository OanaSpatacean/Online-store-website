import React, {useState} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './productdetail'
import './product.css'
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

    const { loginWithRedirect,isAuthenticated} = useAuth0();
    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
           return x.Cat === product;
        })
        setProduct(update);
    }
    const AllClothes = () => 
    {
        setProduct(Productdetail)
    }
  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>Introducing our versatile and comfortable clothing item, designed to complement any occasion. This product is expertly crafted from high-quality materials, ensuring both style and comfort. With a wide range of sizes available, you can find the perfect fit for any body type. Whether you're dressing up for a special event or looking for an everyday favorite, this piece is the ideal choice for both fashion and ease...</p>
                                <h3>{curElm.Price} RON</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='products'>
        <h2>finest clothing selection</h2>
        <p>home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                    <li onClick={() => AllClothes ()}>All Clothes</li>
                        <li onClick={() => filtterproduct ("Dresses")}>Dresses</li>
                        <li onClick={() => filtterproduct ("Shirts")}>Shirts</li>
                        <li onClick={() => filtterproduct ("Jeans")}>Jeans</li>
                        <li onClick={() => filtterproduct ("Shoes")}>Shoes</li>
                        <li onClick={() => filtterproduct ("Hats")}>Hats</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm) => 
                        {
                            return(
                                <>
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                          <img src={curElm.Img} alt={curElm.Title}></img>
                                          <div className='icon'>
                                            {
                                                isAuthenticated ? 
                                                <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                :
                                                <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                            }
                                            <li onClick={() => view (curElm)}><BsEye /></li>                                    
                                          </div>
                                        </div>
                                        <div className='detail'>
                                          <p>{curElm.Cat}</p>
                                          <h3>{curElm.Title}</h3>
                                          <h4>{curElm.Price} RON</h4>
                                        </div>
                                      </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product