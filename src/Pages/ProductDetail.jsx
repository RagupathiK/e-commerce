import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function ProductDetail({ cartitems, setcartitems }) {
    const [product, setproduct] = useState(null);
    const [qty, setqty] = useState(1)
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/product/' + id)
            .then(res => {
                setproduct(res.data.product);
            })
    }, [id])

    function addtocart() {
        const itemexist = cartitems.find((item) => item.product._id == product._id)
        if (!itemexist) {
            const newitem = { product, qty };
            setcartitems((state) => [...state, newitem]);
            toast.success("Cart item added succesfully")
        }
    }

    function Increaseqty() {
        if (product.stock === qty) {
            return;
        }
        setqty((state) => state + 1)
    }

    function Decreaseqty() {
        if (qty > 1) {
            setqty((state) => state - 1)
        }
    }

    const keyFeaturesArray = product?.keyfeatures[0].feature.split(",") || [];



    return product &&
        <div className='container container-fluid p-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-5' >
                    <img src={product.images[0].image} alt="" width={'400px'} />
                </div>
                <div className='col-12 col-lg-5 float-end' >
                    <h3>{product.description}</h3>
                    <div class="rating-outer">
                        <div class="rating-inner"></div>

                        <p style={{ fontSize: '50px' }}><b>₹ {product.price}</b></p>
                        <div className='stockcounter d-flex'>
                            <span className='btn btn-danger minus' onClick={Decreaseqty}>-</span>

                            <input type="number" className='form-control count d-inline' size={'10'} value={qty} readOnly />

                            <span className='btn btn-primary plus' onClick={Increaseqty} >+</span>

                        </div>
                        <br />
                        <button type="button" onClick={addtocart} disabled={product.stock === 0} id="cart_btn" class="btn btn-primary d-inline ml-4">Add to Cart</button>
                        <br /><br />
                        <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span></p>

                        <br />
                        <br />
                        <h4>Key Features</h4>
                        <ul className='opacity-50'>
                             {keyFeaturesArray.map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

}
