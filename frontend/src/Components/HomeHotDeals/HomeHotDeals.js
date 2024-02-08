import React from 'react'
import './homeHotDeals.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'
import { useNavigate } from 'react-router-dom'

const HomeHotDeals = () => {
  const navigate = useNavigate()

  const navigateToForYou = ()=>{
    navigate(`/products/for_you/hot_deals`)
  }
  return (
    <div className='homeHotDeals'>
      <div className='headingStyle'>
        <div className='homeHeading'>Hot Deals</div>
        <div className='rightArrow'>
          <img
            onClick={navigateToForYou}
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='hotDealItems row m-2'>
        <ItemCard home={true} hotDeals={true}/>
        <ItemCard home={true} hotDeals={true}/>
        <ItemCard home={true} hotDeals={true}/>
        <ItemCard home={true} hotDeals={true}/>
        <ItemCard home={true} hotDeals={true}/>
        <ItemCard home={true} hotDeals={true}/>
      </div>
    </div>
  )
}

export default HomeHotDeals
