import React, { useContext } from 'react'
import './profilePage.css'
import sideBarIcon from '../Images/sideBarIcon.png'
import {SideBarContext} from '../contexts/SideBarContext'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'


const ProfileSideBar = () => {
    const {id} = useParams()
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
                            style={{ backgroundColor: id === 'profile' ? 'rgb(65, 189, 189)' : '' }}
                        >
                            <NavLink to='/profile'>Personal information</NavLink>
                        </div>
                        <div
                            // onClick={()=> navigate('/orders')}
                        >
                            <NavLink to='/orders'>My Orders</NavLink>
                        </div>
                        <div
                            onClick={()=> navigate('/reviews')}
                        >
                            My Reviews
                        </div>
                        <div
                            onClick={()=> navigate('/addresses')}
                        >
                            Addresses
                        </div>
                        <div
                            onClick={()=> navigate('/help')}
                        >
                            Need HELP
                        </div>
                        <div
                            onClick={()=> navigate('/register')}
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
