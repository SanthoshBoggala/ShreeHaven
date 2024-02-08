import './itemCard.css'
import React, { useState } from 'react'
import shoe2 from '../../Images/shoe2.webp'
import notInWishlist from '../../Images/wishlist1.png'
import inWishlist from '../../Images/wishlist2.avif'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ home = false, notProducts = false, topRated = false, hotDeals = false, trendingDeals = false, suggestedItems = false }) => {
    const navigate = useNavigate()
    const [wishlist, setWishlist] = useState(false)

    const item = {
        "key": "Men_striped_casual_light_green_white_shirt",
        "name": "Men striped casual light green white shirt",
        "brand": "U TURN",
        "category": "Shirts",
        "type": "Men",
        "price": 369,
        "newPrice": 313,
        "discount": 15,
        "starRating": 4,
        "ratings": 30059,
        "reviews": 3599,
        "inStock": true,
        "description": "Explore style with this men's striped casual light green and white shirt by U TURN. This shirt is perfect for a casual and trendy look.",
        "image": shoe2
    }
    const itemCategoryCaption = {
        Shirts: 'New Range',
        Shoes: 'Top Collection',
        Dresses: 'Bestsellers'
    }
    const navigateToItem = () => {
        if (topRated) {
            navigate(`/products/top_rated/${item.category}`)
            return
        }

        navigate(`/products/${item.key}`)
    }

return (
    <div className={ notProducts ? `itemCardMain col-6 col-sm-4 col-md-3 col-lg-2` : 'itemCardMain col-lg-2 col-md-3 col-sm-4 col-6'}>
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
                        {
                            item.inStock && (
                                <div className='outOfStock'>
                                    Out of stock
                                </div>
                            )
                        }
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
