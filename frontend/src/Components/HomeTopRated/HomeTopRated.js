import './homeTopRated.css'
import React, { useContext } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import UserContext from '../../contexts/userContext'
import useGetData from '../../customHooks/useGetData'

const HomeTopRated = () => {

    const { user } = useContext(UserContext)

    const url = `http://localhost:5000/api/products/top_rated`
    const { loading, data: { products, cateCaptions }, error } = useGetData({ url, query: { limit: "6" }, authorization: user.token })


    console.log(products)
    return (
        <div className='homeTopRated'>
            <div className='homeHeading'>Top Rated Products</div>
            {loading ? (
                <div>
                    Loading...
                </div>
            )
                : (
                    <div className='homeTopRatedItems row m-2'>
                        {products && products.length !== 0 && (
                            products.map((one, index) => (
                                <ItemCard key={index} item={one} caption={cateCaptions[index]} topRated={true} />
                            ))
                        )}
                    </div>
                )}
        </div>
    )
}

export default HomeTopRated
