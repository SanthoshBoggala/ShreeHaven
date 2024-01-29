import React, { useState } from 'react';
import './accountSettings.css'

const AccountSettings = () => {
  const profileDetails = {
    userName: "santhosh",
    email: "bsr@gmail.com",
    address: "dkjkjsad",
    phoneNumber: 9885823771,
    pincode: 9382629
  };

  const [profile, setProfile] = useState({
    userName: profileDetails.userName,
    address: profileDetails.address,
    phoneNumber: profileDetails.phoneNumber,
    pincode: profileDetails.pincode
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update user details
  };

  return (
    <div className='container  mt-5'>
        <form onSubmit={handleSubmit} >
            <div className='updateDetials'>Update User Details</div>
            <div className="mb-3 account">
            <label className="form-label">User Name:</label>
            <input
                type="text"
                className="form-control"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3 account">
            <label className="form-label">Address:</label>
            <input
                type="text"
                className="form-control"
                name="address"
                value={profile.address}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3 account">
            <label className="form-label">Phone Number:</label>
            <input
                type="tel"
                className="form-control"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
            />
            </div>
            <div className="mb-3 account">
            <label className="form-label">Pincode:</label>
            <input
                type="text"
                className="form-control"
                name="pincode"
                value={profile.pincode}
                onChange={handleChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
    </div>
  );
};

export default AccountSettings;
