import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [title, setTitle] = useState({})
    const {_id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + _id)
            .then( res => {
                console.log(res.data);
                setTitle(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <p>Product Name: {title.product}</p>
            <p>Price: {title.price}</p>
            <p>Description: {title.description}</p>
        </div>
    )
}

export default Detail;

