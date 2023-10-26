import React from 'react'
import {db} from './firebase'
//import './registration.css'
import {Link} from 'react-router-dom'
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore'
import { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const login = async () =>
    {
        const dbref = collection(db, 'Login');
        try 
        {
            /*const matchName = query(dbref, where('Name', '==', name));
            const matchPassword = query(dbref, where('Password', '==', password));
            const nameSnapshot = await getDocs(matchName);
            const nameArray = nameSnapshot.docs.map((doc) => doc.data());

            const passwordSnapshot = await getDocs(matchPassword);
            const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());


            if (nameArray.length > 0 && passwordArray.length > 0)  */

            const matchEmail = query(dbref, where('Email', '==', email));
            const matchPassword = query(dbref, where('Password', '==', password));
            const emailSnapshot = await getDocs(matchEmail);
            const emailArray = emailSnapshot.docs.map((doc) => doc.data());

            const passwordSnapshot = await getDocs(matchPassword);
            const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());


            if (emailArray.length > 0 && passwordArray.length > 0) 
            {   
                window.location.replace('http://localhost:3000/');          
                alert("Successfully logged in!");       
            } 
            else 
            {
                alert("Check your email or password, or create a new account!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }
    }

    return (
        <>
        <div className='container'>
            <div className='form'>
                <h2>Login</h2>
                <div className='box'>
                    <input type='text' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Don't have an account!<Link to='/registration'>Register</Link></p>
                    <button onClick={login}>Sign In</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login