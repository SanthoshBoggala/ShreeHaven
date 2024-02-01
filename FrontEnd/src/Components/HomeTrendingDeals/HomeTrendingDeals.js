import './homeTrendingDeals.css'
import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const HomeTrendingDeals = () => {
  return (
    <div className='homeTrendingDeals'>
      <div className='homeHeading'>Trending Deals</div>
      <div className='trendingDealItems row m-2'>
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

export default HomeTrendingDeals
