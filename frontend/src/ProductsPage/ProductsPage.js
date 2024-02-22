import React, { useContext, useEffect, useState } from "react"
import './productsPage.css'
import axios from "axios"
import sideBarIcon from '../Images/sideBarIcon.png'
import { SideBar, Products } from "../Components"
import { useParams } from "react-router-dom"
import UserContext from "../contexts/userContext"

const ProductPage = () => {
    const [filter, setFilter] = useState([])
    const [rating, setRating] = useState('4')
    const [filterShow, setFilterShow] = useState('show')
    const { user } = useContext(UserContext)

    const { category } = useParams()

    useEffect(() => {
        async function getCategories() {
            const cateTypes =  await axios.get(`http://localhost:5000/api/type_category?type=${category}`,{
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            const cates = cateTypes.data.typecategories.categories

            const cates1 = cates.map((c) => {
                return { name: c.category, isChecked: true }
            })

            setFilter([...cates1, 
                { name: 'priceUnder', price: '10000' },
                { name: 'sortOrder', sortOption: 'lowToHigh' }
            ])
        }
        try {
            getCategories()
        } catch (error) {
            console.log(error)
        }


    }, [category])

    const handleFilter = (e) => {
        const { name, value, type } = e.target

        setFilter((prev) =>
            prev.map(item => {
                if (item.name === name && type === 'number') {
                    return { ...item, price: value }
                }
                if (item.name === name && type === 'radio') {
                    return { ...item, sortOption: value }
                }
                if (item.name === name && type === 'checkbox') {
                    return { ...item, isChecked: !item.isChecked }
                }
                else {
                    return item
                }
            })
        )
    }

    const ratingHandle = (e) => {
        setRating(e.target.value)
    }
    const ChangeFilterShow = () => {
        setFilterShow(prev => prev === '' ? 'show' : '')
    }

    return (
        <div className="productsPage">
            <div className='outfilterIcon'>
                <img
                    src={sideBarIcon}
                    alt='side-bar-icon'
                    onClick={ChangeFilterShow}
                />
            </div>
            <SideBar
                filterShow={filterShow}
                ChangeFilterShow={ChangeFilterShow}
                filter={filter}
                onChange={(e) => handleFilter(e)}
                rating={rating}
                ratingHandle={(e) => ratingHandle(e)}
            />
            <Products filter={filter} rating={rating}/>
        </div>
    )
}

export default ProductPage