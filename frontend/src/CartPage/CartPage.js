import CartItem from './CartItem'
import './cartPage.css'
import useFetchData from '../customHooks/useFetchData'
import { useContext, useState } from 'react'
import UserContext from '../contexts/userContext'
import NotFoundAndUnAuthorized from '../Components/NotFoundAndUnAuthorized/NotFoundAndUnAuthorized'
import SideBarContextProvider from '../contexts/SideBarContext'
import ProfileSideBar from '../ProfilePage/ProfileSideBar'

const CartPage = () => {
    const { user, token } = useContext(UserContext)

    const [refetch, setRefetch] = useState(0)

    const url = `${process.env.REACT_APP_BACKEND_URL}api/cart/user`
    const { data: { cart } } = useFetchData({ url, query: refetch, token })

    const cartItems = (cart && cart.items) ? cart.items : []

    const handleRefetch = () => {
        setRefetch((prev) => prev + 1)
    }

    if (Object.keys(user).length === 0 || user.type == 'admin') {
        return (
            <NotFoundAndUnAuthorized />
        )
    }

    return (
        <SideBarContextProvider>
            <div className='cartPage minHeight'>
                <h2 className='text-center'>My Cart</h2>
                {token && token.length !== 0 ?
                    (cartItems && cartItems.length !== 0) ? (
                        cartItems.map((one, index) => <CartItem key={index} item={one.product} handleRefetch={handleRefetch} />)
                    ) : (
                        <h5>Empty Cart. Try Some Shopping...</h5>
                    ) : (
                        <h5>Login to view your cart...</h5>
                    )}
                <ProfileSideBar active={'cart'} />
            </div>
        </SideBarContextProvider>
    )
}

export default CartPage