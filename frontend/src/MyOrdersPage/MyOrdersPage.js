import React from 'react'
import './myOrdersPage.css'
import { MyOrders } from '../Components'
import ProfileSideBar from '../ProfilePage/ProfileSideBar'
import SideBarContextProvider from '../contexts/SideBarContext'

const MyOrdersPage = () => {

    return (
        <SideBarContextProvider>
            <div>
                <ProfileSideBar active={'orders'}/>
                <MyOrders />
            </div>
        </SideBarContextProvider>

    )
}

export default MyOrdersPage
