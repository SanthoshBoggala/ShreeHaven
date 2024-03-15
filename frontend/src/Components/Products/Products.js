import React, { useContext, useState } from "react"
import './products.css'
import ItemCard from "../ItemCard/ItemCard"
import { useParams } from "react-router-dom"
import UserContext from '../../contexts/userContext'
import { SelectedFilters } from "../../contexts/SelectedFilters"
import useFetchData from "../../customHooks/useFetchData"

const Products = ({ urlEndPoint, topRatedUrl = "", stylesForYouPage = false, topRated = false }) => {
    const [search, setSearch] = useState("")
    const [urlSearch, setUrlSearch] = useState("")
    const { token } = useContext(UserContext)

    const { filters } = useContext(SelectedFilters)
    const { category } = useParams()

    let url
    if(category){
        url = `https://shreehaven.onrender.com/api/products?type=${category}&search=${urlSearch}`
    }
    else if( topRatedUrl.length !== 0 ){
        url = `https://shreehaven.onrender.com/api/products/top_rated?category=${topRatedUrl}&search=${urlSearch}`
    }
    else if(['trending_deals', 'hot_deals'].includes(urlEndPoint)){
        url = `https://shreehaven.onrender.com/api/products/${urlEndPoint}?search=${urlSearch}`
    }
    else if(urlEndPoint !== 'suggested_items') {
        url = `https://shreehaven.onrender.com/api/products/styles/${urlEndPoint}?search=${urlSearch}`
    }
    else{
        url = `https://shreehaven.onrender.com/api/products?search=${urlSearch}`   
    }

    const { data: { products }, isLoading } = useFetchData({ url, query: filters, token })

   
    const searchChange = (e) => {
        setSearch(e.target.value)
    }
    const searchItems = ()=>{
        setUrlSearch(search)
    }
    return (
        <div className='products'>
            {isLoading ? <h4>Loading</h4> : (
                <div className={category ? 'productsTop' : 'noProductsTop' } >
                    <div className="productsCount">
                        {`View (${products ? products.length : 0}) products`}
                    </div>
                    <div className="productSearch">
                        <input
                            type="text"
                            name='search'
                            value={search}
                            placeholder="search"
                            onChange={searchChange}
                        />
                        <button 
                            className="searchBtn"
                            onClick={searchItems}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}

            {(products && products.length !== 0) ? (
                <>
                    <div className="row">
                        {products.map((item, index) => {
                            return (
                                <ItemCard key={index} item={item} notProducts={(stylesForYouPage || topRated)} />
                            )
                        })
                        }
                    </div>
                </>

            ) : (
                <h4 className="productsTop">
                    No Products Available right now...
                </h4>
            )}

        </div>
    )
}

export default Products