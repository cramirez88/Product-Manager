import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
const ProductList = (props) => {

    const {title, setTitle} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setTitle(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                title.map((product, index)=>{

                return (
                  <div key={index}>
                  <p>{product.product}</p>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                  <Link to={`/product/${product._id}`}>{product.product} Information</Link>
                  </div>
                )
                
               
                })
            }
        </div>
)
}
export default ProductList;

