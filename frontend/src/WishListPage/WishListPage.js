import React, { useContext } from 'react'
import './wishListPage.css'
import { Products } from '../Components'
import UserContext from '../contexts/userContext'
import NotFoundAndUnAuthorized from '../Components/NotFoundAndUnAuthorized/NotFoundAndUnAuthorized'
import SideBarContextProvider from '../contexts/SideBarContext'
import ProfileSideBar from '../ProfilePage/ProfileSideBar'

const WishListPage = () => {
    const { user } = useContext(UserContext)

    if (Object.keys(user).length == 0 || (user && user.type === 'admin')) {
        return <NotFoundAndUnAuthorized />
    }
    return (
        <SideBarContextProvider>
            <div className='minHeight wishListPage'>
                <ProfileSideBar active={'wishlist_products'}/>
                <Products wishlist={true} />
            </div>

        </SideBarContextProvider>

    )
}

export default WishListPage
