import React, { useState } from "react"
import './productsPage.css'
import { SideBar, Products } from "../Components"

const ProductPage = () => {
    const [filterShow, setFilterShow] = useState('show')

    const ChangeFilterShow = () => {
        setFilterShow(prev => prev === '' ? 'show' : '')
    }

    return (
        <>
            <div className="productsPage minHeight">
                <div className='outfilterIcon'>
                    <img
                        src={'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/sideBarIcon.png'}
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