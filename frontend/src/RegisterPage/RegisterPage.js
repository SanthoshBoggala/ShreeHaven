import React from 'react'
import './registerPage.css'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {

  const bg = 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/bg.jpg'

  return (
    <div className='registerPage' style={{ backgroundImage: `url(${bg})` }}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
