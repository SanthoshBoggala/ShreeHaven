import React, { useState } from "react"
import './productsPage.css'
import sideBarIcon from '../Images/sideBarIcon.png'
import { SideBar, Products } from "../Components"

const ProductPage = () => {
    const [filterShow, setFilterShow] = useState('show')

    const ChangeFilterShow = () => {
        setFilterShow(prev => prev === '' ? 'show' : '')
    }

    return (
        <>
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
        </>
    )
}

export default ProductPage