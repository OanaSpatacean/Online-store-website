import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './crud.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const Crud = () => {
    const [ id, setId ] = useState();
    const [ title, setTitle ] = useState();
    const [ category, setCategory ] = useState();
    const [ price, setPrice ] = useState();
    const [ image, setImage ] = useState();
    const [ fetchData, setFetchData ] = useState([]);

    const dbref = collection(db, "Productdetail");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Title: title, Cat: category, Price: price, Img: image});

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
        setId(matchId.id);  
        setTitle(matchId.Title);
        setCategory(matchId.Cat);
        setPrice(matchId.Price);
        setImage(matchId.Img);  
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Title: title, Cat: category, Price: price, Img: image});
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
            <h2>Add / Update Form</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Title' autocomplete='Off' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Category' autocomplete='Off' value={category} onChange={(e) => setCategory(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Price' autocomplete='Off' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Image URL' autocomplete='Off' value={image} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <button onClick={add}>Add</button>
            <button onClick={update}>Update</button>
        </div>
        <div class='database'>
            <h2>CRUD Database</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Id: {data.id}</h3>
                                <h3>Title: {data.Title}</h3>
                                <h3>Category: {data.Cat}</h3>
                                <h3>Price: {data.Price}</h3>
                                <h3>Image URL: {data.Img}</h3>                   
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

export default Crud