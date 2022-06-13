import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (e) => {
  // e.preventDefault()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div>
      <h1>Product Form</h1>
      <form>
        <div>
          <label>Title</label>
          <input type='text' onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>Price</label>
          <input type='text' onChange={e => setPrice(e.target.value)}></input>
        </div>
        <div>
          <label>Description</label>
          <input type='text' onChange={e => setDescription(e.target.value)}></input>
        </div>
        <button>Create</button>
      </form>
    </div>
    
  )
}


export default ProductForm