import ProductForm from './components/ProductForm'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'


function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/home' default></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
