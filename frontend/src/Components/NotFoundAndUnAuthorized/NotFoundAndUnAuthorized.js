import React from 'react'
import './notFoundAndUnAuthorized.css'

const NotFoundAndUnAuthorized = ({type}) => {
  const img = `https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/${type === "notFound" ? '404NotFound.webp' : '401UnAuthorized.png'}`
  return (
    <div className='notFoundAndUnAuthorized'>
        <img 
            src= { img }
            className='img-fluid'
            alt={'notFoundAndUnAuthorized'}
        />
    </div>
  )
}

export default NotFoundAndUnAuthorized
