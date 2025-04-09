import { Link } from "react-router-dom";

export default function Productcard({ product }) {



  return (

    <div className='col-sm-12 col-md-6 col-lg-3 '>
      <div className='card text-center mt-3 mb-3' style={{ width: '17rem' }}>
        <img src={product.images[0].image} alt="img" />
        <div className='card-body d-flex flex-column '>
          <h6 className='card-title'>
            <Link to={"/product/" + product._id} className="text-decoration-none text-black">{product.name}</Link>
          </h6>
          <div className="ratings mt-auto">
            <div className="rating-outer" style={{ color: 'yellow' }}>
              <div className="rating-inner">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
          <b><p className='card-text text'>₹ {product.price}</p></b>
          <Link to={"/product/" + product._id} id="view_btn" className="btn btn-block bg-warning"> View Details</Link>
        </div>
      </div>
    </div>

  )
}
