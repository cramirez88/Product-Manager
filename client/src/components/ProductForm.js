import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
  const {title, setTitle} = props
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')


  const submitHandler = e => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/product', {
      product,
      price,
      description
    })
    .then(res => {
      console.log(res.data)
      setTitle([...title, res.data])
      setProduct('')
      setPrice('')
      setDescription('')
    })
    .catch(err => console.log(err))
  }



  return (
    <div>
      <h1>Product Form</h1>
      <form onSubmit={submitHandler} >
        <div>
          <label>Title</label>
          <input type='text' onChange={e => setProduct(e.target.value)} value={product}></input>
        </div>
        <div>
          <label>Price</label>
          <input type='text' onChange={e => setPrice(e.target.value)} value={price}></input>
        </div>
        <div>
          <label>Description</label>
          <input type='text' onChange={e => setDescription(e.target.value)} value={description}></input>
        </div>
        <button>Create</button>
      </form>
    </div>
    
  )
}


export default ProductForm