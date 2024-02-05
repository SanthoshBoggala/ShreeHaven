import React from 'react'
import './homeSuggestedItems.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'


const HomeSuggestedItems = () => {
  return (
    <div className='homeSuggestedItems'>
      <div className='headingStyle'>
        <div className='homeHeading'>Suggested Items</div>
        <div className='rightArrow '>
          <img 
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='SuggestedItems row m-2'>
        <ItemCard home = {true} />
        <ItemCard home = {true} />
        <ItemCard home = {true} />
        <ItemCard home = {true} />
        <ItemCard home = {true} />
        <ItemCard home = {true} />
      </div>
    </div>
  )
}

export default HomeSuggestedItems
