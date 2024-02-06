import React, { useContext } from 'react'
import './profilePage.css'
import sideBarIcon from '../Images/sideBarIcon.png'
import {SideBarContext} from '../contexts/SideBarContext'
import { useNavigate } from 'react-router-dom'

const ProfileSideBar = ({active}) => {
    const navigate = useNavigate()
    const {sideBar, setSideBar} = useContext(SideBarContext)
    const handleSideBar = ()=>{
        setSideBar(prev => {
            return (
                {...prev, show: !prev.show}
            )
        })
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
                            santhosh
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
                        <div
                            onClick={()=> navigate('/my/profile')}
                            style={{ backgroundColor: active === 'profile' ? 'rgb(65, 189, 189)' : ''}}
                        >
                            Personal information
                        </div>
                        <div
                            style={{ backgroundColor: active === 'orders' ? 'rgb(65, 189, 189)' : ''}}
                            onClick={()=> navigate('/my/orders')}
                        >
                            My Orders
                        </div>
                        <div
                            style={{ backgroundColor: active === 'cart' ? 'rgb(65, 189, 189)' : ''}}
                            onClick={()=> navigate('/my/cart')}
                        >
                            My Cart
                        </div>
                        <div
                            style={{ backgroundColor: active === 'reviews' ? 'rgb(65, 189, 189)' : ''}}
                            onClick={()=> navigate('/my/reviews')}
                        >
                            My Reviews
                        </div>
                        <div
                            onClick={()=> navigate('/my/addresses')}
                        >
                            Addresses
                        </div>
                        <div
                            onClick={()=> navigate('/my/help')}
                        >
                            Need HELP
                        </div>
                        <div
                            onClick={()=> navigate('/')}
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
