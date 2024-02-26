import React, { useState } from 'react';
import './loginPage.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    userType: '',
  });
  const [err, setErr] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateForm = ()=>{

    if(formData.userType.length === 0){
      setErr("Invalid user type")
      return false
    }
    if (formData.password.length < 6) {
      setErr("Password must be at least 6 characters long")
      return false
    }
    if (!isValidEmail(formData.email)) {
      setErr("Enter a valid email address")
      return false
    }

    return true
  }
  const submitForm = (e)=>{
    e.preventDefault()

    if(!validateForm) return
    
    setErr("")

  }

  return (
    <div className="loginForm">
      <form onSubmit={submitForm}>
        <div className='loginHeading'>Login</div>
        <div className="mb-3">
          <img 
            src={'./username.png'}
            alt='username'
          />
          <input
            type="text"
            className="loginInputs"
            id="username"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <img 
            src={'./pass.png'}
            alt='password'
          />
          <input
            type="password"
            className="loginInputs"
            id="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <img 
            src={'./email.png'}
            alt='email'
          />
          <input
            type="email"
            className="loginInputs"
            id="email"
            placeholder='email'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <img 
            src={'./type.png'}
            alt='type'
          />
          <select
            className="loginInputs"
            id="type"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
          <div className='forgotPass'>
            Forgot Password ?
          </div>
          <div className='error'>
            {err && err}
          </div>
        </div>
        <div className='loginBtnDiv'>
          <button type="submit" className="loginBtn">
            Login
          </button>
          <div className='loginRegisterDiv'>
            Don't have an account ? <span className='loginRegister'>Sign Up</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
