import React, { useContext, useEffect, useState } from "react"
import './products.css'
import ItemCard from "../ItemCard/ItemCard"
import { useParams } from "react-router-dom"
import UserContext from '../../contexts/userContext'
import useGetData from "../../customHooks/useGetData"

const Products = ({ rating, filter, urlEndPoint, stylesForYouPage = false, topRated = false }) => {
    // const [products, setProducts] = useState(null)
    const { user } = useContext(UserContext)
    const { category } = useParams()

    let url = `http://localhost:5000/api/products?type=${category}`
    if(urlEndPoint && urlEndPoint !== 'suggested_items') {
        url = `http://localhost:5000/api/products/${urlEndPoint}`
    }
    const { loading, data : {products} , error } = useGetData({url , authorization: user.token})

    // useEffect(() => {
    //     async function getProducts() {
    //         const products = await axios.get(`http://localhost:5000/api/products?type=${category}`, {
    //             headers: {
    //                 authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyZmNjNTczZDg2MjQyYTU0ZTIzNGUiLCJlbWFpbCI6InNAZ21haWwuY29tIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzA4NTIwNTU0LCJleHAiOjE3MDg1NTY1NTR9.3t5fPvXA3A0jHXf67fsx7pQszT-jjjlVKocjc5sKfJA'
    //             }
    //         })

    //         setProducts(products.data.products)
    //     }
    //     try {
    //         getProducts()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [category, rating, filter])

    // const Details = {
    //     "productKey": "Men_striped_casual_light_green_white_shirt",
    //     "name": "Men striped casual light green white shirt",
    //     "brand": "U TURN",
    //     "category": "Shirts",
    //     "price": 369,
    //     "newPrice": 313,
    //     "discount": 15,
    //     "starRating": 4,
    //     "ratings": 30059,
    //     "reviews": 3599,
    //     "description": "Explore style with this men's striped casual light green and white shirt by U TURN. This shirt is perfect for a casual and trendy look.",
    //     "image": "https://drive.google.com/uc?id=1TlgCuWATQr43Lxhn33i7DKgFeggLn9Al"
    // }

    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 87, 43]
    // const productDetails = arr.map(() => Details)

    return (
        <div className='products'>
            { loading && <div>{'Loading'}</div> }

            {(products && products.length !== 0) ? (
                <>
                    <div className={ stylesForYouPage ? 'noProductsTop' : 'productsTop'} >
                        <div className="productsCount">
                            {`CheckOut (${products.length}) products`}
                        </div>
                        <div className="productSearch">
                            <input
                                type="text"
                                placeholder="search"
                            />
                        </div>
                    </div>
                    <div className="row">
                        { products.map((item, index) => {
                            return (
                                <ItemCard key={index} item={item} notProducts={(stylesForYouPage || topRated)} />
                            )
                            })
                        }
                    </div>
                </>

            ) : (
                <div className="productsTop">
                    No Items Available right now...
                </div>
            )}

        </div>
    )
}

export default Products