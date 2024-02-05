import React, { useState } from 'react';
import './personalInfo.css';

const PersonalInfo = () => {
  const initialUser = {
    username: 'santhosh',
    email: 'bs@gmail.com',
    phoneNumber: 9885823771,
    area: 'gd nellore',
    pincode: 6875855,
    district: 'chittoor',
    state: 'ap',
  };

  // Use state to track changes to user object
  const [user, setUser] = useState(initialUser);

  // Event handler to update user state when input values change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  return (
    <div className='personalInfo row'>
      <div className='col-1 col-md-3'></div>
      <form className='col-10 col-md-8'>
        <fieldset className='formInfo'>
          <div className='image'>
            <div className='userImg'>
              <img
                src=''
                alt='profilepic'
                className='img-fluid'
              />
            </div>
          </div>
          <legend>Personal Information:</legend>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              className='profileInput'
              type='text'
              id='username'
              value={user.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={user.email}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>
          <div>
            <label htmlFor='phno'>Phone Number:</label>
            <input
              type='text'
              id='phno'
              value={user.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='area'>Area:</label>
            <input
              type='text'
              id='area'
              value={user.area}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='pincode'>pincode:</label>
            <input
              type='text'
              id='pincode'
              value={user.pincode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='district'>District:</label>
            <input
              type='text'
              id='district'
              value={user.district}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='state'>State:</label>
            <input
              type='text'
              id='state'
              value={user.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button
              type='submit'
              className='updateBtn'
            >
              Update
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default PersonalInfo;
