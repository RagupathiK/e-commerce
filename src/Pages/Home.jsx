import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productcard from '../components/Productcard';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';


export default function Home() {

  const [products, setProducts] = useState([]);
  const [searchparams, setsearchparams]=useSearchParams()

  useEffect(() => {
      // fetch(process.env.REACT_APP_API_URL+'/products?' + searchparams)
      // .then(res => res.json())
      // .then(res => setProducts(res.data.products))
      // axios.get('https://backend-7iwt.onrender.com/api/v1/products?'+searchparams)
      axios.get('http://localhost:4000/api/v1/products?'+searchparams)
      .then(res=> {
        setProducts(res.data.products);
        setsearchparams(res.data)
      })
  },[setsearchparams,searchparams])
  
  return (  
    <div className='bg-white'>
      <div id="carouselExampleAutoplaying" className='px-3 pt-3  container-fluid carousel slide' data-bs-ride="carousel" data-bs-interval="1000">
        <div className='carousel-inner'>

          <div className='carousel-item active '>
            <a href="abc"><img className='d-block w-100 rounded rounded-3' src="/images/carousal1.png" alt="img" /></a>
          </div>
          <div className='carousel-item'>
            <a href="abc"><img className='d-block w-100 rounded rounded-3' src="/images/carousal2.png" alt="img" /></a>
          </div>
          <div className='carousel-item'>
            <a href="sbc"><img className='d-block w-100 rounded rounded-3' src="/images/carousal3.png" alt="img" /></a>
          </div>
          <div className='carousel-item'>
            <a href="abc"><img className='d-block w-100 rounded rounded-3' src="/images/carousal4.png" alt="img" /></a>
          </div>
          <div className='carousel-item'>
            <a href="abc"><img className='d-block w-100 rounded rounded-3' src="/images/carousal5.png" alt="img" /></a>
          </div>
        </div>
        <button className='carousel-control-prev' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
        </button>
        <button className='carousel-control-next' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
        </button>
      </div>
      <section id='products' className='container d-flex'>
        <div className='d-flex row g-2'>
          {products.map(product => {return <Productcard product={product}/>})}
        </div>
      </section>

    </div>
  )
}
