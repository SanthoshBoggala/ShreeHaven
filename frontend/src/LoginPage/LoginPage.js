import React from 'react'
import './loginPage.css'
import LoginForm from './LoginForm'

const LoginPage = () => {

  const bg = 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/bg.jpg'
  
  const backgroundStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  }

  return (
    <div className='loginPage' style={backgroundStyles}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
