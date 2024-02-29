import './similarItems.css'
import ItemCard from '../ItemCard/ItemCard'
import React, { useContext } from 'react'
import UserContext from '../../contexts/userContext'
import useGetData from '../../customHooks/useGetData'

const SimilarItems = ({category, product}) => {
    const { user, token } = useContext(UserContext)

    const url = 'http://localhost:5000/api/products/similar_products'
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
            category,
            product
        }
      };
    
      const { loading = null, data: {products = null}, error } = useGetData(url, config);
      
    return (
        <div className='similarItems'>
            <div className='headingStyle'>
                <div className='homeHeading'>Similar Products</div>
            </div>
            <div className='trendingDealItems row m-2'>
                { products && products.length !== 0 && (
                    products.map((one, index)=> (
                        <ItemCard key={index} item={one} />
                    ))
                ) }
            </div>
        </div>
    )
}

export default SimilarItems
