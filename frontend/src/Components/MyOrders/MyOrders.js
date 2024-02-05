import React from 'react'
import './myOrders.css'
import SingleOrder from './SingleOrder'

const MyOrders = () => {
  return (
    <div className='myOrders'>
      <div className='orderHeading row'>
        <div className='col-md-2 col-4 myOrderTitle'>My Orders</div>
        <div className='col-md-8 col-6 orderText'>
          View and edit all your pending, delivered <br />
          and returned orders here
        </div>
      </div>
      <div className='Allorders'>
        <SingleOrder />
        <SingleOrder />
        <SingleOrder />
        <SingleOrder />
        <SingleOrder />
        <SingleOrder />
      </div>
    </div>
  )
}

export default MyOrders
