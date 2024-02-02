import './homeTopRated.css'
import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const HomeTopRated = () => {
    return (
        <div className='homeTopRated'>
            <div className='homeHeading'>Top Rated Products</div>
            <div className='homeTopRatedItems row m-2'>
                <ItemCard home={true} topRated={ true }/>
                <ItemCard home={true} topRated={ true }/>
                <ItemCard home={true} topRated={ true }/>
                <ItemCard home={true} topRated={ true }/>
                <ItemCard home={true} topRated={ true }/>
                <ItemCard home={true} topRated={ true }/>
            </div>
        </div>
    )
}

export default HomeTopRated
