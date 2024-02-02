import React from 'react'
import './homeHotDeals.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'

const HomeHotDeals = () => {
  return (
    <div className='homeHotDeals'>
      <div className='headingStyle'>
        <div className='homeHeading'>Hot Deals</div>
        <div className='rightArrow '>
          <img
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='hotDealItems row m-2'>
        <ItemCard home={true} />
        <ItemCard home={true} />
        <ItemCard home={true} />
        <ItemCard home={true} />
        <ItemCard home={true} />
        <ItemCard home={true} />
      </div>
    </div>
  )
}

export default HomeHotDeals
