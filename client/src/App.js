import ProductForm from './components/ProductForm'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import Detail from './components/Detail'


function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/product' default></Route>
        <Route element={<Detail/>} path='/product/:_id' default></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
