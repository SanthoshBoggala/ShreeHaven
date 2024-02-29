import React, { useContext, useEffect, useState } from "react"
import './productsPage.css'
import axios from "axios"
import sideBarIcon from '../Images/sideBarIcon.png'
import { SideBar, Products } from "../Components"
import { useParams } from "react-router-dom"
import UserContext from "../contexts/userContext"
import SelectedFiltersProvider from "../contexts/SelectedFilters"

const ProductPage = () => {
    const [filterShow, setFilterShow] = useState('show')

    const ChangeFilterShow = () => {
        setFilterShow(prev => prev === '' ? 'show' : '')
    }

    return (
        <SelectedFiltersProvider>
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
                />
                <Products />
            </div>
        </SelectedFiltersProvider>
    )
}

export default ProductPage