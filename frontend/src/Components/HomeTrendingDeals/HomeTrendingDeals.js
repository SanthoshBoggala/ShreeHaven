import './homeTrendingDeals.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'
import { useNavigate } from 'react-router-dom'

const HomeTrendingDeals = () => {
  const navigate = useNavigate()

  const navigateToForYou = ()=>{
    navigate(`/products/for_you/trending_deals`)
  }
  return (
    <div className='homeTrendingDeals'>
      <div className='headingStyle'>
        <div className='homeHeading'>Trending Deals</div>
        <div className='rightArrow '>
          <img
            onClick={navigateToForYou}
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='trendingDealItems row m-2'>
        <ItemCard home={true} trendingDeals={true}/>
        <ItemCard home={true} trendingDeals={true}/>
        <ItemCard home={true} trendingDeals={true}/>
        <ItemCard home={true} trendingDeals={true}/>
        <ItemCard home={true} trendingDeals={true}/>
        <ItemCard home={true} trendingDeals={true}/>
      </div>
    </div>
  )
}

export default HomeTrendingDeals
