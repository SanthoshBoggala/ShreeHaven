import './itemCard.css'
import React, { useState } from 'react'
import shoe2 from '../../Images/shoe2.webp'
import notInWishlist from '../../Images/wishlist1.png'
import inWishlist from '../../Images/wishlist2.avif'

const ItemCard = () => {
    const [wishlist, setWishlist] = useState(false)

    const item = {
        "productKey": "Men_striped_casual_light_green_white_shirt",
        "name": "Men striped casual light green white shirt",
        "brand": "U TURN",
        "category": "Shirts",
        "price": 369,
        "newPrice": 313,
        "discount": 15,
        "starRating": 4,
        "ratings": 30059,
        "reviews": 3599,
        "description": "Explore style with this men's striped casual light green and white shirt by U TURN. This shirt is perfect for a casual and trendy look.",
        "image": shoe2
    }
    return (
        <div className='itemCardMain col-6 col-sm-4 col-md-3 col-lg-2'>
            <div className='itemCard'>
                <div className='itemImg img-fluid'>
                    <img 
                        src={item.image}
                        alt={item.name}
                    />
                    <div className='itemOffer'>
                        {`-${item.discount}%`}
                    </div>
                    <div className='itemWishlist'>
                        <img 
                            onClick={()=> setWishlist((prev)=> !prev)}
                            src={wishlist ? inWishlist : notInWishlist}
                            alt={wishlist ? 'inWishlist' : 'notInWishlist'}
                        />
                    </div>
                </div>
                <div className='itemDown'>
                    <div className='itemBrand'>{item.brand}</div>
                    <div className='itemName'>{item.name}</div>
                    <div>
                        <span className='itemNewPrice'>{`₹${item.newPrice}`}</span>
                        <strike className='itemPrice'>{`₹${item.price}`}</strike>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
