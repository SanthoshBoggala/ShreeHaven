import React from 'react'
import './registerPage.css'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {

  const bg = 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/bg.jpg'

  const backgroundStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  }

  return (
    <div className='registerPage' style={backgroundStyles}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
