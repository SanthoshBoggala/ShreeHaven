import {React, useState} from 'react'
import Profile from '../Components/Profile/Profile'
import './profilePage.css'
import AccountSettings from '../Components/AccountSettings/AccountSettings'
import MyOrders from '../Components/MyOrders/MyOrders'
import MyCart from '../Components/MyCart/MyCart'

const ProfilePage = ()=>{
    const [profileSide, setProfileSide] = useState(0)
    
    const myProfileSide = [
        <Profile />,
        <AccountSettings />,
        <MyOrders />,
        <MyCart />                    
    ]

    const OtherComponent = ()=>{
        return (
            myProfileSide[profileSide]
        )
    }

    return (
        <div className='row'>
            <div className="profileSidebar col-3">
                <div 
                    onClick={()=> setProfileSide(0)}
                >
                    MY PROFILE
                </div>
                <div
                    onClick={()=> setProfileSide(1)}    
                >
                    ACCOUNT SETTINGS
                </div>
                <div
                    onClick={()=> setProfileSide(2)}  
                >
                    MY ORDERS
                </div>
                <div
                    onClick={()=> setProfileSide(3)}  
                >
                    MY CART
                </div>
                <div>
                    LOGOUT
                </div>
            </div>
            <div className='col-9'>
                <OtherComponent />
            </div>
        </div>
    )
}

export default ProfilePage