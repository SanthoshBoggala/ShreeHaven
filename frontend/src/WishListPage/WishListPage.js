import React from 'react'
import './wishListPage.css'
import { Products } from '../Components'

const WishListPage = () => {
  return (
    <div className='minHeight wishListPage'>
      <Products wishlist={true}/>
    </div>
  )
}

export default WishListPage
