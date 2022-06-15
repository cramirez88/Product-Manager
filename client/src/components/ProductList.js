import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
const ProductList = (props) => {

    const {title, setTitle, removeProduct} = props;

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            removeProduct(id)
        })
        .catch(err => console.log(err))
    }
    
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
                  <Link to={`/product/update/${product._id}`}> Edit</Link>
                  <button onClick={e => deleteProduct(product._id)}>Delete</button>
                  </div>
                )
                
               
                })
            }
        </div>
)
}
export default ProductList;

