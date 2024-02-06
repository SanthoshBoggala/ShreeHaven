import './cartPage.css'
import img from '../Images/mobile2.webp'


const CartItem = ()=>{

    const product =  {
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
        'image': img
    }

    const currentDate = new Date();
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 6);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString('en-US', options);

    return (
        <div className='row cartItem'>
            <div className='col-md-4 imageContainer'>
                <img 
                    src={product.image}
                    className='cartImage img-fluid'
                    alt={product.name}
                />
            </div>
            <div className='col-md-8 cartItemDetails'>
                    <div className="cartItemBrand">
                        {product.brand}
                    </div>
                    <div className="cartItemName">
                        {product.name}
                    </div>
                    <div className="cartItemPrice">
                        <div className="cartItemDiscount me-2">{product.discount + '% off'}</div>
                        <div className="cartItemOPrice me-2"><strike>{"₹" + product.price}</strike></div>
                        <div className="cartItemNPrice">{"₹" + product.newPrice}</div>
                    </div>
                    <div>
                        <span class="badge bg-primary cartItemStarRating me-2">{product.starRating + '★'}</span>
                        <span className="cartItemRatings">({product.ratings})</span>
                    </div>
                    <div className='cartItemDelivery'>
                        <span>Delivery by {formattedDate}</span>
                    </div>
                    <div className='row justify-content-center mt-2'>
                        <div className='col-6'>
                            <button className='buyNow'>Buy this now</button>
                        </div>
                        <div className='col-6'>
                            <button className='remove'>Remove</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CartItem