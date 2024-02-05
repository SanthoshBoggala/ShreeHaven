import React from 'react'
import './myOrders.css'
import img from '../../Images/mobile1.webp'

const SingleOrder = () => {
    const order = {
        name: "hjfghldsif  odhsg; lg lhd",
        brand: "my cats",
        size: 23,
        quantity: 2,
        price: 2000,
        status: 'pending',
        image: img,
        expectedDate: Date.now()
    }

    return (
        <div className='order row'>
            <div className='orderImageDiv col-md-2'>
                <div className='orderImage'>
                    <img
                        src={order.image}
                        alt='order'
                    />
                </div>
            </div>
            <div className='orderDetails col-md-6'>
                    {order.name}
                    {order.brand}
                    {order.size}
                    {order.quantity}
                    {order.price}
            </div>
            <div className='orderStatus col-md-2'>
                <div>status</div>
                <div>{order.status}</div>
            </div>
            <div className='orderDate col-md-2'>
                {order.expectedDate}
            </div>
        </div>
    )
}

export default SingleOrder
