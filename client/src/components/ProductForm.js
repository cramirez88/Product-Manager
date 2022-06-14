import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')


  const submitHandler = e => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
    .then(res => {
      console.log(res.data)
      setTitle('')
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
          <input type='text' onChange={e => setTitle(e.target.value)} value={title}></input>
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