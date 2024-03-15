import React from 'react'
import './homePage.css'
import { HomeCarousel, HomeHotDeals, HomeStyles, HomeSuggestedItems, HomeTopRated, HomeTrendingDeals } from '../Components'

const HomePage = () => {

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
