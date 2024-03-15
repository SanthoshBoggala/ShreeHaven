import React from 'react'
import './loginPage.css'
import LoginForm from './LoginForm'

const LoginPage = () => {

  const bg = 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/bg.jpg'
  return (
    <div className='loginPage' style={{ backgroundImage: `url(${bg})` }}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
