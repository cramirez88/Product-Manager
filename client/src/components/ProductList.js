import React, {useState, useEffect} from 'react'
import axios from 'axios';
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
                return <p key={index}>{product.product}, {product.price}, {product.description}</p>
                })
            }
        </div>
)
}
export default ProductList;

