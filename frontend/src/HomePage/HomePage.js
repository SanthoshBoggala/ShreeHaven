import React from 'react'
import './homePage.css'
import { HomeCarousel, HomeHotDeals, HomeStyles, HomeSuggestedItems, HomeTopRated, HomeTrendingDeals } from '../Components'

const HomePage = () => {
  console.log("BACKEND_URL", process.env.REACT_APP_BACKEND_URL)
  return (
      <div className='homePage minHeight'>
        <HomeCarousel />
        <HomeStyles />
        <HomeTopRated />
        <HomeHotDeals />
        <HomeTrendingDeals />
        <HomeSuggestedItems />
      </div>
  )
}

export default HomePage
