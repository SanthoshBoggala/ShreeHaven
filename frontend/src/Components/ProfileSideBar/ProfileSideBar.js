import React from 'react'
import './profileSideBar.css'
import { Link } from 'react-router-dom'

const ProfileSideBar = ({page, setPage}) => {

  return (
    <>
      <ui className='list-group ProfileSideBar'>
        <li className="list-group-item"
            onClick={()=> setPage(0)}
        >
            Profile
        </li>
        <li className="list-group-item"
               onClick={()=> setPage(1)}
        >
            Account Settings
        </li>
        <li className="list-group-item"
        >
            <Link className='profileCart' to={'/cart'}> My Cart</Link>
        </li>
        <li className="list-group-item"
           onClick={()=> setPage(2)}
        >
            My Orders
        </li>
        <li className="list-group-item"
        > 
            Logout
        </li>
      </ui>
    </>
  )
}

export default ProfileSideBar
