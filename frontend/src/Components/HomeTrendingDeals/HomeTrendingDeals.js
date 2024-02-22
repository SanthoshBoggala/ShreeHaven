import './homeTrendingDeals.css'
import rightArrow from '../../Images/rightArrow.png'
import ItemCard from '../ItemCard/ItemCard'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../contexts/userContext'
import useGetData from '../../customHooks/useGetData'

const HomeTrendingDeals = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)


  const url = `http://localhost:5000/api/products/trending_deals`
  const { loading, data: { products }, error } = useGetData({ url, query: { limit: "6" }, authorization: user.token })


  const navigateToForYou = () => {
    navigate(`/products/for_you/trending_deals`)
  }
  return (
    <div className='homeTrendingDeals'>
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
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
            { products && products.length !== 0 && (
              products.map( (one, index) => (
                <ItemCard key={index} item={one} />
              ) )
            ) }
          </div>
        </>
      )}
    </div>
  )
}

export default HomeTrendingDeals
