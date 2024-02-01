import React from 'react'
import './homePage.css'
import { HomeCarousel, HomeHotDeals, HomeStyles, HomeTrendingDeals } from '../Components'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HomeCarousel />
      <HomeStyles />
      <HomeHotDeals />
      <HomeTrendingDeals />
    </div>
  )
}

export default HomePage
