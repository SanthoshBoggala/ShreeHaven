import React, { useState } from 'react'
import './profilePage.css'
import { AccountSettings, MyOrders, Profile, ProfileSideBar } from '../Components'

const ProfilePage = () => {
    const [page, setPage] = useState(0)

    const updateState  = (newState) => {
        setPage(newState)
    }

    const newPage = [<Profile />, <AccountSettings />, <MyOrders />]

    return (
        <div className='profilePage row'>
            <div className='profileSideBar col-lg-3 col-4'>
                <ProfileSideBar page={page} setPage={updateState}/>
            </div>
            <div className='col-lg-9 col-7'>
                {newPage[page]}
            </div>
        </div>
    )
}

export default ProfilePage
