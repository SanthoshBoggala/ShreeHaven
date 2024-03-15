import React, { useContext } from 'react'
import './wishListPage.css'
import { Products } from '../Components'
import UserContext from '../contexts/userContext'
import NotFoundAndUnAuthorized from '../Components/NotFoundAndUnAuthorized/NotFoundAndUnAuthorized'

const WishListPage = () => {
    const { user } = useContext(UserContext)

    if(Object.keys(user).length == 0 || (user && user.type === 'admin')){
        return <NotFoundAndUnAuthorized />
    }
    return (
        <div className='minHeight wishListPage'>
            <Products wishlist={true} />
        </div>
    )
}

export default WishListPage
