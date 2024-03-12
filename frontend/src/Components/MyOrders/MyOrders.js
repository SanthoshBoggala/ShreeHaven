import React, { useState, useContext } from 'react'
import './myOrders.css'
import SingleOrder from './SingleOrder'
import UserContext from '../../contexts/userContext'
import useFetchData from '../../customHooks/useFetchData'
import {LimitContext} from '../../contexts/LimitContext'

const MyOrders = () => {
  const [refetch, setRefetch] = useState(0)

  const { user, token } = useContext(UserContext)
  const { limit } = useContext(LimitContext)
  let url = 'http://localhost:5000/api/orders/user'

  if(user && user.type == 'admin') {
    url = 'http://localhost:5000/api/orders'
  }
  const { isLoading, data : {orders}, error } = useFetchData({ url, query: refetch, token })

  const refetchHelpher = () => {
    setRefetch(prev => prev + 1)
  }
  return (
    <div className='myOrders'>
      <div className='orderHeading row'>
        <div className='col-md-2 col-4 myOrderTitle'>{ user.type == 'admin' ? 'All Orders' : 'My Orders'}</div>
        <div className='col-md-8 col-6 orderText'>
          { user.type == 'admin' ? (
            <div>
              View and edit all pending, delivered <br />
              and returned orders here
            </div>
          ) : (
            <div>
              View all your pending, delivered <br />
              and returned orders here
            </div>
          ) }
        </div>
      </div>
      <div className='Allorders'>
        { (orders && orders.length !== 0) ? (
          orders.map((one, index)=> (<SingleOrder {...one} key={index} refetchHelpher={refetchHelpher} />))
        ) : (
            user && user.type == 'admin' ?
            (
              <h4>No Orders Available Right Now...</h4>
            )
            : (
              <h4>You haven`t shopped any! Try Shopping...  </h4>
            )
        ) }
      </div>
    </div>
  )
}

export default MyOrders
