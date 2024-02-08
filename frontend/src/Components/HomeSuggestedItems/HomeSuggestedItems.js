import React from 'react'
import './homeSuggestedItems.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'
import { useNavigate } from 'react-router-dom'


const HomeSuggestedItems = () => {
  const navigate = useNavigate()

  const navigateToForYou = ()=>{
    navigate(`/products/for_you/suggested_items`)
  }
  return (
    <div className='homeSuggestedItems'>
      <div className='headingStyle'>
        <div className='homeHeading'>Suggested Items</div>
        <div className='rightArrow '>
          <img 
            onClick={navigateToForYou}
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='SuggestedItems row m-2'>
        <ItemCard home = {true} suggestedItems={true}/>
        <ItemCard home = {true} suggestedItems={true}/>
        <ItemCard home = {true} suggestedItems={true}/>
        <ItemCard home = {true} suggestedItems={true}/>
        <ItemCard home = {true} suggestedItems={true}/>
        <ItemCard home = {true} suggestedItems={true}/>
      </div>
    </div>
  )
}

export default HomeSuggestedItems
