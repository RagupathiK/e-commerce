import React from 'react'
import Search from './Search'
import { Link } from "react-router-dom"

export default function Header({cartitems}) {
  return (
    <div className='position-sticky top-0 z-1'>
      <nav className='navbar px-3 bg-danger'>
        <div className='col-sm-12 col-md-6 col-lg-3' >
          <div className='navbar-brand'>
            <Link to='/'>
            <img src="/images/Reliance_Digital.svg.png" alt="img" width={'150px'} height={'48px'} />
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-5 col-sm-3 mt-3 '>
       <Search/>
        </div>
        <div className='d-flex col-12 col-md-3 mt-3 justify-content-evenly'>
          <Link to={"/cart"} className='text-decoration-none text-white'>
          <span><i class="fa fa-shopping-cart text-white" aria-hidden="true"></i></span>
                    <span id="cart" className="ml-3">Cart</span> 
                    <span className="btn btn-warning mx-1" id="cart_count">{cartitems.length}</span>
                </Link>
          <Link to={"/Wishlist"} className='text-decoration-none text-white'>
          <span><i class="fa fa-heart text-white" aria-hidden="true"></i></span>
                    <span id="Wishlist" className="ml-3">Wishlist</span> 
                </Link>
          <Link to={"/register"} className='text-decoration-none text-white'>
          <span><i class="fa fa-shopping-cart text-white" aria-hidden="true"></i></span>
                    <span id="login" className="ml-3">Login</span> 
                </Link>
        </div>
      </nav>
      <div className='p-3 bg-white pt-2 justify-content-evenly'>
        <div className='row d-inline col-sm-12 col-md-6 col-lg-3' >
          <a className='text-decoration-none text-black' href="a"><img src="/images/mobile.png" alt="img" width={'25px'} height={'25px'} />Mobiles</a>
          <a className='text-decoration-none text-black' href="b"><img src="/images/Air conditioner.png" alt="img" width={'25px'} height={'25px'} />Air Conditioners</a>
          <a className='text-decoration-none text-black' href="c"><img src="/images/Frezzer.png" alt="img" width={'25px'} height={'25px'} />Refrigerators</a>
          <a className='text-decoration-none text-black' href="d"><img src="/images/smart watch.png" alt="img" width={'25px'} height={'25px'} />Televisions </a>
          <a className='text-decoration-none text-black' href="e"><img src="/images/Laptop.png" alt="img" width={'25px'} height={'25px'} />Laptop</a>
          <a className='text-decoration-none text-black' href="f"><img src="/images/Earphones.png" alt="img" width={'25px'} height={'25px'} />Earphones</a>
          <a className='text-decoration-none text-black' href="g"><img src="/images/smart watch.png" alt="img" width={'25px'} height={'25px'} />Smart Watches</a>
          <a className='text-decoration-none text-black' href="h"><img src="/images/Tablets.png" alt="img" width={'25px'} height={'25px'} />Tablets</a>
          <a className='text-decoration-none text-black' href="i"><img src="/images/Washing machine.png" alt="img" width={'25px'} height={'25px'} />Washing Machines</a>
          <a className='text-decoration-none text-black' href="j"><img src="/images/Total items.png" alt="img" width={'25px'} height={'25px'} />All Categories</a>
        </div>
      </div>
    </div>
  )
}
