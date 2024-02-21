import React, { useEffect, useState } from "react"
import './productsPage.css'
import axios from "axios"
import sideBarIcon from '../Images/sideBarIcon.png'
import { SideBar, Products } from "../Components"
import { useParams } from "react-router-dom"

const ProductPage = () => {
    const [filter, setFilter] = useState(null)
    const [rating, setRating] = useState('4')
    const [filterShow, setFilterShow] = useState('show')

    const { category } = useParams()

    useEffect(() => {
        async function getCategories() {
            const cateTypes =  await axios.get(`http://localhost:5000/api/type_category?type=${category}`,{
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyZmNjNTczZDg2MjQyYTU0ZTIzNGUiLCJlbWFpbCI6InNAZ21haWwuY29tIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzA4NTIwNTU0LCJleHAiOjE3MDg1NTY1NTR9.3t5fPvXA3A0jHXf67fsx7pQszT-jjjlVKocjc5sKfJA'
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

        // function getCategories() {

        //     let categories = ['Shirts', 'Pants', 'Hoodies', 'Shoes', 'Cargos']

        //     const categories1 = categories.map((c) => {
        //         return { name: c, isChecked: true }
        //     })
        //     const allCategories = [
        //         ...categories1,
        //         { name: 'priceUnder', price: '' },
        //         { name: 'sortOrder', sortOption: 'lowToHigh' }
        //     ]
        //     setFilter(allCategories)
        // }
        // getCategories()

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