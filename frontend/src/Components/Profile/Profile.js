import './profile.css'
import profileImage from '../../Images/user.svg'

const Profile = ()=>{

    const profile = {
        userName : "santhosh",
        email : "bsr@gmail.com",
        address : "dkjkjsad",
        phoneNumber : 9885823771,
        pincode : 9382629
    }

    return (
        <div className='profile'>
                <img 
                    className='profileImage'
                    src={profileImage}
                    alt='profileImg'
                />
                <div className='userDetails'>
                    <div>Hello, {profile.userName}</div>
                    <div>Email: {profile.email}</div>
                    <div>Ph No: {profile.phoneNumber}</div>
                    <div>Address: {profile.address}</div>
                    <div>Pincode: {profile.pincode}</div>
                </div>
        </div>
    )
}

export default Profile