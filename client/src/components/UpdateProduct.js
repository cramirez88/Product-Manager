import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import ProductForm from './ProductForm'



const UpdateProduct = (props) => {
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [header, setHeader] = useState('')
  const {_id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${_id}`)
    .then(res => {
      setProduct(res.data.product)
      setPrice(res.data.price)
      setDescription(res.data.description)
      setHeader(res.data.product)
    })
    .catch(err => console.log(err))
  }, [])

  const updateFormHandler = e => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/product/${_id}`, {
      product,
      price,
      description
    })
    .then(res => {
      console.log(res)
      navigate('/product')
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <h1>Edit {header}</h1>
      <form onSubmit={updateFormHandler}>
        <div>
          <label>Product:</label>
          <input type='text' onChange={e => setProduct(e.target.value)} value={product}></input>
        </div>
        <div>
          <label>Price:</label>
          <input type='text' onChange={e => setPrice(e.target.value)} value={price}></input>
        </div>
        <div>
          <label>Description:</label>
          <input type='text' onChange={e => setDescription(e.target.value)} value={description}></input>
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}


export default UpdateProduct