import React from 'react'
import './homeHotDeals.css'
import ItemCard from '../ItemCard/ItemCard'

const HomeHotDeals = () => {
  return (
    <div className='homeHotDeals'>
      <div className='homeHeading'>Hot Deals</div>
      <div className='hotDealItems row m-2'>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
        <ItemCard home={true}/>
      </div>
    </div>
  )
}

export default HomeHotDeals
