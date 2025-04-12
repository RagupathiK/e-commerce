import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Cart({ cartitems, setcartitems }) {
    const [complete, setcomplete] = useState(false);

    function Increaseqty(item) {
        if (item.product.stock == item.qty) {
            return;
        }
        const updateditems = cartitems.map((i) => {
            if (i.product._id == item.product._id) {
                i.qty++
            }
            return i;
        })
        setcartitems(updateditems)
    }

    function Decreaseqty(item) {
        if (item.qty > 1) {
            const updateditems = cartitems.map((i) => {
                if (i.product._id == item.product._id) {
                    i.qty--
                }
                return i;
            })
            setcartitems(updateditems)
        }
    }

    function removeitems(item) {
        const updateditems = cartitems.filter((i) =>
            <div>

                if (i.product._id !== item.product._id) {
                    true
                }
            </div>
        )
        setcartitems(updateditems)

    }

    function placeorderhandler() {
        axios.post('http://localhost:4000/api/v1/order', cartitems)
            .then(() => {
                setcartitems([]);
                setcomplete(true)
                toast.success("order success")
            })

    }


    return (
        cartitems.length > 0 ?
            <Fragment>
                <div className='container container-fluid'>
                    <h2><b>My Cart : {cartitems.length}</b></h2>

                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 col-lg-8'>
                            {cartitems.map((item) =>
                            (<Fragment>
                                <hr />
                                <div className='cart-item'>
                                    <div className='row'>
                                        <div className='col-4 col-lg-3'>
                                            <img src={item.product.images[0].image} alt={item.product.name} width={'180px'} />
                                        </div>
                                        <div className='col-5 col-lg-3'>
                                            <Link to={"/product/" + item.product._id}>{item.product.description}</Link>
                                        </div>
                                        <div className='col-4 col-lg-2 mt-4 mt-lg-0'>
                                            <p><b>₹ {item.product.price}</b></p>
                                        </div>
                                        <div className='col-4 col-lg-2 mt-lg-0'>
                                            <div className='stockcounter d-flex'>
                                                <span class="btn btn-danger minus" onClick={() => Decreaseqty(item)}>-</span>
                                                <input type="number" class="form-control count d-inline" value={item.qty} readOnly />
                                                <span class="btn btn-primary plus" onClick={() => Increaseqty(item)}>+</span>
                                            </div>
                                        </div>
                                        <div className='col-4 col-lg-1 mx-4 mt-4 mt-lg-0'>
                                            <i id="delete_cart_item" onClick={() => removeitems(item)} className="fa fa-trash"></i>
                                        </div>

                                    </div>

                                </div>

                            </Fragment>)
                            )}

                        </div>
                        <div className='col-12 col-lg-3 my-4 mx-5'>
                            <div id='order_summary'>
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal: <span className='order-summary-values'>{cartitems.reduce((acc, item) => (acc + item.qty), 0)} (units)</span></p>
                                <p>Est. total <span className='order-summary-values'>₹ {cartitems.reduce((acc, item) => (acc + parseInt(item.product.price) * item.qty), 0)}</span></p>
                                <hr />
                                <button id='checkout_btn' onClick={placeorderhandler} className='btn btn-warning btn-block rounded rounded-pill w-100'>Place Order</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment> : (!complete ? <center><h2 className='p-5'>Your Cart is Empty!</h2></center>
                : <Fragment><center><h2 className='p-5'>Order Complete</h2></center>
                    <p>Your order as been placed sucessfully.</p>
                </Fragment>)
    )
}
