require('dotenv').config();

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Users = require('../Models/userModel');

const register = asyncHandler(async (req, res)=>{
    const {username, email, phoneNumber, area, district, state, type, pincode, password} = req.body;

    if(username && email && phoneNumber && area && district && state && pincode && password && type) {
        if(!['admin', 'customer'].includes(type)) {
            res.status(400);
            throw new Error('only admin and customers can register');
        }
        const userExists = await Users.findOne({email, type});
        if(userExists){
            res.json({"msg": "user already exists"})
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({
            username, email, phoneNumber, area, district, state, pincode, type, password: hashedPassword
        })

        res.json({user})
    }
    else {
        res.status(400);
        throw new Error("All fields are required");
    }
    
});

const login = asyncHandler(async (req, res)=>{
    const {email, password, type} = req.body;

    if(email && password && type) {
        const user = await Users.findOne({email, type});

        if(!user) {
            res.json({"msg": "user with this mail doesn`t exists"});
            return;
        }

        if( await bcrypt.compare(password, user.password)){
            const token = await jwt.sign(
                {userId: user._id, email: user.email, type: user.type},
                process.env.JWT_ACCESSCODE,
                {expiresIn: '10h'}
                );
            
                
            res.header('Authorization', `Bearer ${token}`);
            res.json({user, token});
            return;
        }
        res.status(401);
        throw new Error("Invalid password");
    }
    else {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    
});

const user = asyncHandler( async(req,res)=>{
    const { userId } = req.user;
    
    const user = await Users.findById(userId);

    res.json({user});
});

const updateUser = asyncHandler(async(req, res)=>{
    const { userId } = req.user;
    const updateUserDetails = req.body;
    const user = await Users.findByIdAndUpdate(
        userId,
        updateUserDetails,
        {new: true}
    )
    res.json({user});
})

module.exports = {
    register,
    login,
    user,
    updateUser
}