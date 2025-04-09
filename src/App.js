import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
    const [cartitems, setcartitems]=useState([]);



  return (
    <div className="App">
      <ToastContainer theme='dark' position='top-center'/>
      <Header cartitems={cartitems}/>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Home/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductDetail cartitems={cartitems} setcartitems={setcartitems}/>}/>
          <Route path='/cart' element={<Cart cartitems={cartitems} setcartitems={setcartitems}/>}/>
          
        </Routes>
      {/* </Router> */}
      
      <Footer/>
    </div>
  );
}

export default App;
