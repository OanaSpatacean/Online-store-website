import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './crud.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const CrudOrders = () => {
    const [ id, setId ] = useState();
    const [ Name, setName ] = useState();
    const [ Adress, setAdress ] = useState();
    const [ Phone, setPhone ] = useState();
    const [ Number, setNumber ] = useState();
    const [ Expire, setExpire ] = useState();
    const [ CVV, setCVV ] = useState();
    const [ fetchData, setFetchData ] = useState([]);
    
    const dbref = collection(db, "Checkout");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Name: Name, Adress: Adress, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});

        if(adddata)
        {
            alert("Data added successfully!");
            window.location.reload();
        }
        else
        {
            alert("Error occured when adding data!");
        }
    }

    const fetch = async () =>
    {
        const snapshot = await getDocs(dbref);
        const fetchdata = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})));
        setFetchData(fetchdata);      
    }

    useEffect( () =>
    {
        fetch();
    }, []
    )

    const passData = async (id) =>
    {
        const matchId = fetchData.find((data) => {
            return data.id === id;
        })
        setId(id);
        setName(matchId.Name);  
        setAdress(matchId.Adress);
        setPhone(matchId.Phone);  
        setNumber(matchId.Number);
        setExpire(matchId.Expire);
        setCVV(matchId.CVV);
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Name: Name, Adress: Adress, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});
            alert("Data updated successfully!");
            window.location.reload();
        } 
        catch (error) 
        {
            alert(error, "Error occured when updating data!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Data deleted successfully!");
            window.location.reload();
        } 
        catch (error) 
        {
            alert(error, "Error occured when deleting data!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Update Form for Orders</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Name' autocomplete='Off' value={Name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Adress' autocomplete='Off' value={Adress} onChange={(e) => setAdress(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Number' autocomplete='Off' value={Number} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Phone' autocomplete='Off' value={Phone} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Expire' autocomplete='Off' value={Expire} onChange={(e) => setExpire(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='CVV' autocomplete='Off' value={CVV} onChange={(e) => setCVV(e.target.value)}></input>
            </div>
            <button onClick={update}>Update</button>
        </div>
        <div class='database'>
            <h2>CRUD Database FOR ORDERS</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Name: {data.Name}</h3>
                                <h3>Adress: {data.Adress}</h3>
                                <h3>Number: {data.Number}</h3>
                                <h3>Phone: {data.Phone}</h3>      
                                <h3>Expire: {data.Expire}</h3>           
                                <h3>CVV: {data.CVV}</h3>   
                                <button onClick={ () => passData (data.id) }>Update</button>
                                <button onClick={ () => del (data.id) }>Delete</button>
                            </div>
                            </>
                        )
                    })
                }                
            </div>
        </div>
        </>
    )
}

export default CrudOrders