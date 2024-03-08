import React, { useContext } from 'react'
import './myOrders.css'
import SingleOrder from './SingleOrder'
import UserContext from '../../contexts/userContext'
import useFetchData from '../../customHooks/useFetchData'
import {LimitContext} from '../../contexts/LimitContext'

const MyOrders = () => {
  const { token } = useContext(UserContext)
  const { limit } = useContext(LimitContext)
  const url = 'http://localhost:5000/api/orders/user'
  const { isLoading, data : {orders}, error } = useFetchData({ url, query: limit, token })

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
        { (orders && orders.length !== 0) ? (
          orders.map((one, index)=> (<SingleOrder {...one} key={index}/>))
        ) : (
          <h4>You haven`t shopped any! Try Shopping...  </h4>
        ) }
      </div>
    </div>
  )
}

export default MyOrders
