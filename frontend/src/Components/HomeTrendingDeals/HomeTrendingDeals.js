import './homeTrendingDeals.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'

const HomeTrendingDeals = () => {
  return (
    <div className='homeTrendingDeals'>
      <div className='headingStyle'>
        <div className='homeHeading'>Trending Deals</div>
        <div className='rightArrow '>
          <img
            className='img-fluid'
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
      </div>
      <div className='trendingDealItems row m-2'>
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

export default HomeTrendingDeals
