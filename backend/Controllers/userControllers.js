require('dotenv').config();

const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const users = require('../Models/userModel');

const register = asyncHandler(async (req, res)=>{
    const {username, email, address, pincode, password} = req.body;

    if(username && email && address && pincode && password) {
        const userExists = await users.findOne({email});
        if(userExists){
            res.json({"msg": "user already exists"})
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = await users.create({
            username, email, address, pincode, password: hashedPassword
        })

        res.json({userData})
    }
    else {
        res.status(400);
        throw new Error("All fields are required");
    }
    
});

const login = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;

    if(email && password) {
        const userData = await users.findOne({email});

        if(!userData) {
            res.json({"msg": "user with this mail doesn`t exists"});
            return;
        }

        if( await bcrypt.compare(password, userData.password)){
            const token = await jwt.sign(
                {userId: userData._id, email: userData.email},
                process.env.JWT_ACCESSCODE,
                {expiresIn: '2h'}
                );
            
                
            res.header('Authorization', `Bearer ${token}`);
            res.json({userData, token});
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
    
    const userData = await users.findById(userId);

    res.json({userData});
});

const updateUser = asyncHandler(async(req, res)=>{
    const { userId } = req.user;
    const updateUserDetails = req.body;
    const userData = await users.findByIdAndUpdate(
        userId,
        updateUserDetails,
        {new: true}
    )
    res.json({userData});
})

module.exports = {
    register,
    login,
    user,
    updateUser
}