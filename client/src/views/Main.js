import React, {useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = props => {
  const [title, setTitle] = useState([])


  return (
    <div>
      <ProductForm title={title} setTitle={setTitle} />
      <ProductList title={title} setTitle={setTitle} />
    </div>
  )
}

export default Main