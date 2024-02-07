import React from 'react'
import './uploadProduct.css'
import ProfileSideBar from '../ProfilePage/ProfileSideBar'
import SideBarContextProvider from '../contexts/SideBarContext'
import UploadProductForm from './UploadProductForm'

const UploadProductPage = () => {
    return (
        <SideBarContextProvider>
            <div>
                <ProfileSideBar active={'upload_product'} />
                <UploadProductForm />
            </div>
        </SideBarContextProvider>
    )
}

export default UploadProductPage
