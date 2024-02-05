import './similarItems.css'
import ItemCard from '../ItemCard/ItemCard'
import React from 'react'

const SimilarItems = () => {
    return (
        <div className='similarItems'>
            <div className='headingStyle'>
                <div className='homeHeading'>Similar Products</div>
                {/* <div className='rightArrow '>
                    <img
                        className='img-fluid'
                        src={rightArrow}
                        alt='rightArrow'
                    />
                </div> */}
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

export default SimilarItems
