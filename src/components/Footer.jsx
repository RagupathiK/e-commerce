import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='px-3 '>
          <div className='row p-2 '>
            <div className='col-3 col-sm-12 col-md-6 col-lg-3'>
              <ul className='list-unstyled'>
                <h5>Product Categories</h5>
                <li>Smartphones</li>
                <li>Laptops</li>
                <li>DSLR Cameras</li>
                <li>Televisions</li>
                <li>Air Conditioners</li>
                <li>Refrigerator</li>
                <li>Kitchen Appliances</li>
                <li>Accessories</li>
                <li>Personal Care & Grooming</li>
              </ul>
            </div>
            <div className='col-3'>
              <ul className='list-unstyled'>
                <h5>Site Info</h5>
                <li>About Reliance Digital</li>
                <li>resQ Services</li>
                <li>Site Map</li>
                <li>Gift Cards</li>
                <li>Corporate Enquiries</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='col-3'>
              <ul className='list-unstyled'>
                <h5>Resource Center</h5>
                <li>Buying Guides</li>
                <li>Manuals</li>
                <li>How To's</li>
                <li>Compare Products</li>
                <li>Nearest Store</li>
              </ul>
            </div>
            <div className='col-3'>
              <ul className='list-unstyled'>
                <h5>Policies</h5>
                <li>Terms of Use</li>
                <li>FAQs</li>
                <li>Cancellation and Returns Policy</li>
                <li>Pricing & Payments Policy</li>
                <li>Privacy Policy</li>
                <li>E-waste Recycling Policy</li>
                <li>EMI and Additional Cashback T&C</li>
                <li>RelianceOne Loyalty Program T&C</li>
                <li>Caution Notice</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='p-4 '>
          <div className='d-flex pt-3 text-center rounded rounded-2 bg-secondary'>
            <div className='d-flex px-md-5'>
              <img src="/images/Sub Menu.png" alt="img" width={'50px'} />
              <p className='pt-3 px-3'>Experience Reliance digital app on mobile</p>
              <a className='pt-3' href="#"><img src="/images/googleplay.png" alt="img" width={'100px'} /></a>
              <a className='pt-3 px-3' href="#"><img src="/images/Appstore.png" alt="img" width={'100px'} /></a>
            </div>
            <div className='px-xl-5 text-center col-sm-12 col-md-6 col-lg-3'>
              <h5>Follow us</h5>
              <a className='px-2' href="#"><img src="/images/facebook.png" alt="img" width={'35px'} /></a>
              <a className='px-0' href="#"><img src="/images/twitter.png" alt="img" width={'35px'} /></a>
              <a className='px-2' href="#"><img src="/images/youtube.png" alt="img" width={'35px'} /></a>
            </div>
          </div>
        </div>
        <div>
          <div className='px-4'>
            <h5>Disclaimer</h5>
            <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
          </div>
          <hr />
          <p className='px-4'>Copyright © 2023 Reliance Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
