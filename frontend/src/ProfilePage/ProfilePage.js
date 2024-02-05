import React, { useContext, useState } from 'react'
import './profilePage.css'
import { PersonalInfo } from '../Components'
import ProfileSideBar from './ProfileSideBar'
import SideBarContextProvider from '../contexts/SideBarContext'

const ProfilePage = ({}) => {

    return (
        <SideBarContextProvider>
            <div className='profilePage'>
                <ProfileSideBar />
                <PersonalInfo />
            </div>
        </SideBarContextProvider>

    )
}

export default ProfilePage
