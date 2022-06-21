import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = props => {
  const [title, setTitle] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
    .then(res => {
      setTitle(res.data)
    })
    .catch((err) => console.log(err))
  },[])

  const removeProduct = productId => {
    axios.delete('http://localhost:8000/api/product' + productId)
    .then((res) => {
      console.log(res)
      console.log(res.data)
      setTitle(title.filter(title => title._id !== productId))
    })
    .catch((err) => console.log(err))
  }

const createProduct = productParam => {
  axios.post('http://localhost:8000/api/product' + productParam)
  .then(res => {
    console.log(res)
    console.log(res.data)
    setTitle([...title, res.data])
  })
  .catch((err) => console.log(err))
}
  return (
    <div>
      <ProductForm onSubmitProp={createProduct} initialName='' title={title} setTitle={setTitle} />
      <ProductList title={title} setTitle={setTitle} removeProduct={removeProduct} />
    </div>
  )
}

export default Main