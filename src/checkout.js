import React, {useEffect} from 'react'
import {db} from './firebase'
import './checkout.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query, addDoc} from 'firebase/firestore'
import { useState } from 'react'
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useAuth } from './AuthContext';

const Checkout = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const [ OrderSent, setOrderSent ] = useState();

    const [ Name, setName ] = useState('');
    const [ Adress, setAdress ] = useState('');
    const [ Phone, setPhone ] = useState('');
    const [ Number, setNumber ] = useState('');
    const [ Expire, setExpire ] = useState('');
    const [ CVV, setCVV ] = useState('');

    const senddata = async () => 
    {
        const dbref = collection(db, 'Checkout');
        try 
        {
            const matchName = query(dbref, where('Name', '==', Name));
            const matchAdress = query(dbref, where('Adress', '==', Adress));
            const matchPhone = query(dbref, where('Phone', '==', Phone));
            const matchNumber = query(dbref, where('Number', '==',  Number));
            const matchExpire = query(dbref, where('Expire', '==', Expire));
            const matchCVV = query(dbref, where('CVV', '==', CVV));

            const NameSnapshot = await getDocs(matchName);
            const NameArray = NameSnapshot.docs.map((doc) => doc.data());

            const AdressSnapshot = await getDocs(matchAdress);
            const AdressArray = AdressSnapshot.docs.map((doc) => doc.data());

            const PhoneSnapshot = await getDocs(matchPhone);
            const PhoneArray = PhoneSnapshot.docs.map((doc) => doc.data());

            const NumberSnapshot = await getDocs(matchNumber);
            const NumberArray = NumberSnapshot.docs.map((doc) => doc.data());

            const ExpireSnapshot = await getDocs(matchExpire);
            const ExpireArray = ExpireSnapshot.docs.map((doc) => doc.data());

            const CVVSnapshot = await getDocs(matchCVV);
            const CVVArray = CVVSnapshot.docs.map((doc) => doc.data());

            if (NameArray.length > 0 && AdressArray.length > 0 && PhoneArray.length > 0 && NumberArray.length > 0 && ExpireArray.length > 0 && CVVArray.length > 0) 
            {      
                setOrderSent(false);
                alert("An error has occured, please check if any of the fields are empty!");                           
            } 
            else 
            {
                await addDoc(dbref, {Name: Name, Adress: Adress, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});
                setOrderSent(true);
                alert("Your order was sent!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }   
    }

    return (
        <>
        <div className='checkout_container'>
            <div className='contant'>
                <h2>Checkout <BsFillBagCheckFill/></h2>
                <div className='form'>
                        <input type='text' name='Name' placeholder='Enter Your Full Name' autoComplete='off' onChange={(e) => setName(e.target.value)}></input>
                        <input type='text' name='Adress' placeholder='Enter The Delivery Adress' autoComplete='off' onChange={(e) => setAdress(e.target.value)}></input>
                        <input type='text' name='Phone' placeholder='Enter Your Phone Number' autoComplete='off' onChange={(e) => setPhone(e.target.value)}></input>
                        <input type='text' name='Number' placeholder='Enter Your Credit Card Number' autoComplete='off' onChange={(e) => setNumber(e.target.value)}></input>
                        <input type='text' name='Expire' placeholder='Enter Your Credit Card Expire Date' autoComplete='off' onChange={(e) => setExpire(e.target.value)}></input>
                        <input type='text' name='CVV' placeholder='Enter Your Credit Card CVV' autoComplete='off' onChange={(e) => setCVV(e.target.value)}></input>
                        {
                            isAuthenticated ? 
                            <button type='submit' onClick={senddata}>Place order</button>
                            : <a type='submit' href="/login">Login to Place Order</a>
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout




/*import React, { useState } from 'react'
import './checkout.css'
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useAuth } from './AuthContext';
import {getDocs, collection, where, query} from 'firebase/firestore'
import {db} from './firebase'

const Checkout = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const [ OrderSent, setOrderSent ] = useState();

    const [ Name, setName ] = useState();
    const [ Adress, setAdress ] = useState();
    const [ Phone, setPhone ] = useState();
    const [ Number, setNumber ] = useState();
    const [ Expire, setExpire ] = useState();
    const [ CVV, setCVV ] = useState();

    const senddata = async (e) => 
    {
        const dbref = collection(db, 'Checkout');
        try 
        {
            const matchName = query(dbref, where('Name', '==', Name));
            const matchAdress = query(dbref, where('Adress', '==', Adress));
            const matchPhone = query(dbref, where('Phone', '==', Phone));
            const matchNumber = query(dbref, where('Number', '==',  Number));
            const matchExpire = query(dbref, where('Expire', '==', Expire));
            const matchCVV = query(dbref, where('CVV', '==', CVV));

            const NameSnapshot = await getDocs(matchName);
            const NameArray = NameSnapshot.docs.map((doc) => doc.data());

            const AdressSnapshot = await getDocs(matchAdress);
            const AdressArray = AdressSnapshot.docs.map((doc) => doc.data());

            const PhoneSnapshot = await getDocs(matchPhone);
            const PhoneArray = PhoneSnapshot.docs.map((doc) => doc.data());

            const NumberSnapshot = await getDocs(matchNumber);
            const NumberArray = NumberSnapshot.docs.map((doc) => doc.data());

            const ExpireSnapshot = await getDocs(matchExpire);
            const ExpireArray = ExpireSnapshot.docs.map((doc) => doc.data());

            const CVVSnapshot = await getDocs(matchCVV);
            const CVVArray = CVVSnapshot.docs.map((doc) => doc.data());

            if (NameArray.length > 0 && AdressArray.length > 0 && PhoneArray.length > 0 && AdressArray.length > 0 && NumberArray.length > 0 && ExpireArray.length > 0 && CVVArray.length > 0) 
            {      
                setOrderSent(true);
                alert("Your order was sent!");                           
            } 
            else 
            {
                setOrderSent(false);
                alert("An error has occured, please check if any of the fields are empty!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }   
    }

  return (
    <>
    <div className='checkout_container'>
        <div className='contant'>
            <h2>Checkout <BsFillBagCheckFill/></h2>
            <div className='form'>
                    <input type='text' name='Name' placeholder='Enter Your Full Name' autoComplete='off' onChange={(e) => setName(e.target.value)}></input>
                    <input type='text' name='Adress' placeholder='Enter The Delivery Adress' autoComplete='off' onChange={(e) => setAdress(e.target.value)}></input>
                    <input type='text' name='Phone' placeholder='Enter Your Phone Number' autoComplete='off' onChange={(e) => setPhone(e.target.value)}></input>
                    <input type='text' name='Number' placeholder='Enter Your Credit Card Number' autoComplete='off' onChange={(e) => setNumber(e.target.value)}></input>
                    <input type='text' name='Expire' placeholder='Enter Your Credit Card Expire Date' autoComplete='off' onChange={(e) => setExpire(e.target.value)}></input>
                    <input name='CVV' placeholder='Enter Your Credit Card CVV' autoComplete='off' onChange={(e) => setCVV(e.target.value)}></input>
                    {
                        isAuthenticated ? 
                        <button type='submit' onClick={senddata}>Place order</button>
                        : <a type='submit' href="/login">Login to Place Order</a>
                    }
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout*/






/*import React, { useState } from 'react'
import './checkout.css'
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useAuth } from './AuthContext';

const Checkout = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
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
        const res = await fetch('https://online-store-product-details-default-rtdb.europe-west1.firebasedatabase.app/Message.json', options)
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
                        : <a type='submit' href="/login">Login to Place Order</a>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout*/