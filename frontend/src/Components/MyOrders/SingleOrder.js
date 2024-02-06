import React from 'react'
import './myOrders.css'
import img from '../../Images/mobile1.webp'


const SingleOrder = () => {
    const order = {
        id: 'fhsd8ewy2yhfweohf0f',
        name: "hjfghldsif  odhsg; lg lhd",
        brand: "my cats",
        size: 23,
        quantity: 2,
        price: 2000,
        status: 'pending',
        image: img,
        orderedDate: Date.now(),
        expectedDate: Date.now()
    }

    return (
        <div className='orderDiv mb-4'>
            <div className='orderUpper row'>
                <div className='orderIdDiv col-sm-7'>
                    <div className='orderIdFront'>Order</div>
                    <div className='orderId'>{` #${order.id}`}</div>
                </div>
                <div className='orderedDate col-sm-5'>{`Order Placed: ${order.orderedDate}`}</div>
            </div> 
            <div className='order row g-2'>
                <div className='orderImageDiv col-md-2'>
                    <div className='orderImage'>
                        <img
                            src={order.image}
                            alt='order'
                        />
                    </div>
                </div>
                <div className='orderDetails col-md-5'>
                    <div className='orderName'>{order.name}</div>
                    <div className='orderBrand'>{`By: ${order.brand}`}</div>
                    <div className='orderOtherDetails'>
                        <div className='orderSize'>{`Size ${order.size}`}</div>
                        <div className='orderQuantity'>{`Qty: ${order.quantity}`}</div>
                        <div className='orderPrice'>{`Rs. ${order.price}`}</div>
                    </div>
                </div>
                <div className='orderStatusDiv col-md-2'>
                    <div className='status'>status</div>
                    <div className='orderStatus'>{order.status}</div>
                </div>
                <div className='orderDateDiv col-md-3'>
                    <div className='date'>Delivery Expected by:</div>
                    <div className='orderDate'>{order.expectedDate}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder
