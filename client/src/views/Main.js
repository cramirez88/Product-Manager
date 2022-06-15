import React, {useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = props => {
  const [title, setTitle] = useState([])

  const removeProduct = id => {
    setTitle(title.filter(title => title._id !== id))
  }

  return (
    <div>
      <ProductForm title={title} setTitle={setTitle} />
      <ProductList title={title} setTitle={setTitle} removeProduct={removeProduct} />
    </div>
  )
}

export default Main