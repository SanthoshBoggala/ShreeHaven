import React, { useContext } from 'react'
import './profilePage.css'
import sideBarIcon from '../Images/sideBarIcon.png'
import {SideBarContext} from '../contexts/SideBarContext'
import UserContext from '../contexts/userContext'
import { useNavigate } from 'react-router-dom'

const ProfileSideBar = ({active}) => {

    const navigate = useNavigate()
    const {sideBar, setSideBar} = useContext(SideBarContext)
    const { user, setUser, setToken } = useContext(UserContext)

    let profileSideCates
    if(user && user.type === 'customer'){
        profileSideCates = [
            {
                url: 'profile',
                display: 'Personal information'
            },
            {
                url: 'orders',
                display: 'My Orders'
            },
            {
                url: 'cart',
                display: 'My Cart'
            },
            {
                url: 'reviews',
                display: 'My Reviews'
            },
            {
                url: 'addresses',
                display: 'Addresses'
            },
            {
                url: 'help',
                display: 'Need Help'
            },
        ]
    }
    else{
        profileSideCates = [
            {
                url: 'profile',
                display: 'Personal information'
            },
            {
                url: 'all_orders',
                display: 'All Orders'
            },
            {
                url: 'type_category',
                display: 'Modify Types/Categories'
            },
            {
                url: 'upload_product',
                display: 'Upload Product'
            },
            {
                url: 'help',
                display: 'Need Help'
            },
        ]
    }
    const handleSideBar = ()=>{
        setSideBar(prev => {
            return (
                {...prev, show: !prev.show}
            )
        })
    } 
    const signOut = ()=>{
        setUser({})
        setToken({})
        navigate('/')
        return
    }
    return (
        <>
            <div className={`offcanvas offcanvas-start ${sideBar.show ? 'show' : ''} profileSideBar`}>
                <div className="offcanvas-header">
                    <div className='userSideBar'>
                        <div className='userImg'>
                            <img
                                src=''
                                alt='profilepic'
                                className='img-fluid'
                            />
                        </div>
                        <div className='sideBarUserName'>
                            {user.username}
                        </div>
                    </div>
                    <div
                        className='sideBarIcon'
                        onClick={handleSideBar}
                    >
                        <img
                            src={sideBarIcon}
                            alt='side-bar-icon'
                        />
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className='sideBarItems'>
                        { profileSideCates && profileSideCates.length !== 0 && (
                            profileSideCates.map( (cates, index) => (
                                <div
                                    key={index}
                                    onClick={()=> navigate(`/my/${cates.url}`)}
                                    style={{ backgroundColor: active === `${cates.url}` ? 'rgb(65, 189, 189)' : ''}}
                                >
                                    {cates.display}
                                </div>
                            ))
                        )}
                        <div
                            onClick={signOut}
                        >
                            Sign Out
                        </div>
                    </div>
                </div>
            </div>
            <div className='outSideIcon'>
                <img
                    src={sideBarIcon}
                    alt='side-bar-icon'
                    onClick={handleSideBar}
                />
            </div>
        </>
    )
}

export default ProfileSideBar
