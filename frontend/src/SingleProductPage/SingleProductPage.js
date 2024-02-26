import React, { useContext } from "react"
import './singleProductPage.css'
import { Reviews, SimilarItems } from "../Components"
import SingleProductImages from "./SingleProductImages"
import useGetData from "../customHooks/useGetData"
import { useNavigate, useParams } from "react-router-dom"
import UserContext from "../contexts/userContext"


const SingleProductPage = () => {
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const url = `http://localhost:5000/api/products/${id}`
    const { loading, data: { product }, error } = useGetData({ url, authorization: user.token })

    console.log(product)
    // const product =  {
    //     "productKey": "Men_striped_casual_light_green_white_shirt",
    //     "name": "Men striped casual light green white shirt",
    //     "brand": "U TURN",
    //     "category": "Shirts",
    //     "price": 369,
    //     "newPrice": 313,
    //     "discount": 15,
    //     "starRating": 4.5,
    //     "ratings": 30059,
    //     "reviews": 3599,
    //     "description": "Explore style with this men's striped casual light green and white shirt by U TURN. This shirt is perfect for a casual and trendy look.",
    //     "images": [
    //         img1,
    //         img2,
    //         img3
    //     ]
    // }

    const colors = {
        "Shirts": ['success', 'primary', 'info', 'secondary', 'dark', 'danger']
    }
    const sizes = {
        "Shirts": ['S', 'M', 'L', 'XL', 'XLL'],
        "Trousers": [28, 30, 32, 34, 36, 38, 40, 42]
    }

    const goToBuyPage = ()=>{
        const currentUrl = window.location.pathname
        navigate(`${currentUrl}/buy`)
        return
    }

    return (
        <>
            {loading ? (
                <div className="productPage">
                    Loading...
                </div>
            ) : (
                (product && (
                    <>
                        <div className="productPage">
                            <div className="row singleProductPage">
                                <div className="col-lg-6 productImageDiv">
                                    <div className="row productImage">
                                        <SingleProductImages images={product.images} />
                                    </div>
                                </div>
                                <div className="col-lg-6 productDetails" >
                                    <div className="productBrand">
                                        {product.brand}
                                    </div>
                                    <div className="productName">
                                        {product.name}
                                    </div>
                                    <div className="productSpecialPrice">
                                        Special Price
                                    </div>
                                    <div className="productPrice">
                                        <div className="productNPrice">{"₹" + product.newPrice}</div>
                                        <div className="productOPrice">{product.price}</div>
                                        <div className="productDiscount">{product.discount + '% off'}</div>
                                    </div>
                                    <div className="productRatings">
                                        <span class="badge bg-primary productStarRating">{product.starRating + '★'}</span>
                                        <span className="productRatings">{product.ratings + ' Ratings'}</span>
                                        <span className="productRatings">and</span>
                                        <span className="productReviews">{product.reviews + ' Reviews'}</span>
                                    </div>
                                    <div className="productColors">
                                        <span className="someHeadings">Available colors</span> <br />
                                        {colors[product.category] && colors[product.category].map((x) => {
                                            return (
                                                <>
                                                    <span className={`badge bg-${x} colorOptions`}>{x}</span>
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className="productSizes">
                                        <span className="someHeadings">Available sizes</span> <br />
                                        {sizes[product.category] && sizes[product.category].map((x) => {
                                            return (
                                                <>
                                                    <span className="badge bg-secondary sizeOptions">{x}</span>
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className="productDescription">
                                        <span className="someHeadings">Description</span> <br />
                                        <div className="innerDescription">{product.description}</div>
                                    </div>
                                    <div className="productOffers">
                                        <div>
                                            <span className="someHeadings">Available offers</span> <br />
                                        </div>
                                        <div>
                                            <img
                                                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                alt="offertag"
                                                className="offerTag"
                                            />
                                            Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above <span className="termsConditions">T&C</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                alt="offertag"
                                                className="offerTag"
                                            />
                                            Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and above <span className="termsConditions">T&C</span>
                                        </div>
                                        <div>
                                            <img
                                                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                                alt="offertag"
                                                className="offerTag"
                                            />
                                            Special PriceGet at flat ₹389 <span className="termsConditions">T&C</span>
                                        </div>
                                        <div className="termsConditions">
                                            View 9 more offers
                                        </div>
                                    </div>
                                    <div className="productBts">
                                        <div>
                                            <button
                                                className="AddToCartBtn"
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="buyBtn"
                                                onClick={goToBuyPage}
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Reviews ratings={product.ratings}
                                starRating={product.starRating}
                                reviews={product.reviews}
                            />

                            <SimilarItems product={product} category={product.category} />
                        </div>
                    </>
                ))
            )}
        </>
    )
}

export default SingleProductPage