import React, { useContext } from 'react'
import './homeSuggestedItems.css'
import ItemCard from '../ItemCard/ItemCard'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/userContext'
import { LimitContext } from '../../contexts/LimitContext'
import useFetchData from '../../customHooks/useFetchData'
import ra1 from '../../Images/rightArrow.png'



const HomeSuggestedItems = () => {
  const navigate = useNavigate()
  const { token } = useContext(UserContext)
  const {limit} = useContext(LimitContext)


  const url = `https://shreehaven.onrender.com/api/products`
  const { data: {products}, isLoading } = useFetchData({url, query: limit, token})
  
  const navigateToForYou = ()=>{
    navigate(`/products/for_you/suggested_items`)
  }


  return (
    <div className='homeSuggestedItems'>
      { isLoading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          <div className='headingStyle'>
        <div className='homeHeading'>Suggested Items</div>
        <div className='rightArrow '>
          <img 
            onClick={navigateToForYou}
            className='img-fluid'
            src={ra1}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='SuggestedItems row m-2'>
        { products && products.length !== 0 && (
          products.map( (one, index) => (
            <ItemCard key={index} item={one} />
          ) )
        ) }
      </div>
        </>
      ) }
    </div>
  )
}

export default HomeSuggestedItems
