import './itemCard.css'
import React, { useState } from 'react'
import shoe2 from '../../Images/shoe2.webp'
import notInWishlist from '../../Images/wishlist1.png'
import inWishlist from '../../Images/wishlist2.avif'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ home = false, topRated = false }) => {
    const navigate = useNavigate()
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
    const itemCategoryCaption = {
        Shirts: 'New Range' ,
        Shoes: 'Top Collection',
        Dresses: 'Bestsellers'
    }
    const navigateToItem = ()=>{
        let to = topRated ? item.category : item.productKey
        navigate(`/products/${to}`)
    }
    return (
        <div className={`itemCardMain col-6 col-sm-4 col-md-3 col-lg-2`}>
            <div className='itemCard'>
                <div className='itemImg img-fluid' style={{ height: home ? '300px' : '250px' }}>
                    <img
                        src={item.image}
                        alt={item.name}
                        onClick={navigateToItem} 
                    />
                    {topRated ||
                        <>
                            <div className='itemOffer'>
                                {`-${item.discount}%`}
                            </div>
                            <div className='itemWishlist'>
                                <img
                                    onClick={() => setWishlist((prev) => !prev)}
                                    src={wishlist ? inWishlist : notInWishlist}
                                    alt={wishlist ? 'inWishlist' : 'notInWishlist'}
                                />
                            </div>
                        </>
                    }
                </div>
                <div className='itemDown'>
                    {topRated === false ?
                        <>
                            <div className='itemBrand'>{item.brand}</div>
                            <div className='itemName'>{item.name}</div>
                            <div>
                                <span className='itemNewPrice'>{`₹${item.newPrice}`}</span>
                                <strike className='itemPrice'>{`₹${item.price}`}</strike>
                            </div>
                        </>
                        : 
                        <>
                            <div className='itemCategory'>{item.category}</div>
                            <div className='itemCategoryCaption'>{itemCategoryCaption[item.category]}</div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemCard
