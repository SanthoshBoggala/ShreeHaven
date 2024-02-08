import React from 'react'
import './typeCategory.css'
import ProfileSideBar from '../ProfilePage/ProfileSideBar'
import SideBarContextProvider from '../contexts/SideBarContext'
import CanModify from './CanModify'

const TypeCategory = () => {
    return (
        <SideBarContextProvider>
            <div>
                <ProfileSideBar active={'type_category'} />
                <CanModify />
            </div>
        </SideBarContextProvider>
    )
}

export default TypeCategory
