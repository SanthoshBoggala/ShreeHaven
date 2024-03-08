import React from 'react'
import './myOrders.css'
import img from '../../Images/mobile1.webp'
import { useNavigate } from 'react-router-dom'


const SingleOrder = (order) => {
    const navigate = useNavigate()

    const findOrderAndDeliverDate = (d)=>{
        const newDate = new Date(d)
        let newDate1 = new Date(d)
        newDate1.setDate(newDate1.getDate() + 6)

        const orderDate = newDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        const deliveryDate = newDate1.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        
        return {orderDate, deliveryDate};
    }

    const { orderDate, deliveryDate } = findOrderAndDeliverDate(String(order.orderedDate))

    const goToProduct = ()=>{
        navigate(`/products/${order.product.type}/${order.product.key}`)
    }
    return (
        <div className='orderDiv mb-4'>
            <div className='orderUpper row'>
                <div className='orderIdDiv col-sm-7'>
                    <div className='orderIdFront'>Order</div>
                    <div className='orderId'>{` #${order._id}`}</div>
                </div>
                <div className='orderedDate col-sm-5'>{`Order Placed: ${orderDate}`}</div>
            </div> 
            <div className='order row g-2'>
                <div className='orderImageDiv col-md-2'>
                    <div className='orderImage'>
                        <img
                            src={img}
                            alt='order'
                            onClick={goToProduct}
                        />
                    </div>
                </div>
                <div className='orderDetails col-md-5'>
                    <div className='orderName'>{order.product.name}</div>
                    <div className='orderBrand'>{`By: ${order.product.brand}`}</div>
                    <div className='orderOtherDetails'>
                        <div className='orderSize'>{`Size ${order.size}`}</div>
                        <div className='orderQuantity'>{`Qty: ${order.count}`}</div>
                        <div className='orderPrice'>{`Rs. ${order.price}`}</div>
                    </div>
                </div>
                <div className='orderStatusDiv col-md-2'>
                    <div className='status'>status</div>
                    <div className='orderStatus'>{order.status}</div>
                </div>
                <div className='orderDateDiv col-md-3'>
                    <div className='date'>Delivery Expected by:</div>
                    <div className='orderDate'>{deliveryDate}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder
