import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (e) => {
  // e.preventDefault()
  return (
    <div>
      <h1>Product Form</h1>
      <form>
        <div>
          <label>Title</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Price</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Description</label>
          <input type='text'></input>
        </div>
        <button>Create</button>
      </form>
    </div>
    
  )
}


export default ProductForm