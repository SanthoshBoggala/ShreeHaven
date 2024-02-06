import React from "react"
// import Item from "../Item/Item"
import ItemCard from "../ItemCard/ItemCard"

const Products = ()=>{

    const Details =  {
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
      "image": "https://drive.google.com/uc?id=1TlgCuWATQr43Lxhn33i7DKgFeggLn9Al"
    }

    const arr = [1,2,3,4,5,6,7,8,9,87,43] 
    const productDetails = arr.map(()=> Details)

    return (
        <div className="col-lg-10 col-9">
            <div className="row">
                { productDetails && ( productDetails.map((x)=> {
                    return (
                        <ItemCard home={false}/>
                    )})
                )}
            </div>
        </div>
    )
}

export default Products