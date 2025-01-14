const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model.js');
const authMiddleware = require('../middlewares/auth.middlewares.js');
const captainModel = require('../models/captain.model.js');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if (!token) {
        return res.status(401).json({ message : 'unauthorized' })
    }

    const isBlacklisted = await blackListTokenModel.findOne({token : token})
    if(isBlacklisted){
        return res.status(401).json({message: "unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user;
  
        return next();
        
    } catch (error) {
        return res.status(401).json({ message: 'unauthorized'})
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    console.log(token);
    
    if (!token) {
        return res.status(401).json({ message : 'unauthorized' })
    }

    const isBlacklisted = await blackListTokenModel.findOne({token : token})
    console.log(isBlacklisted);
    
    if(isBlacklisted){
        return res.status(401).json({message: "unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)

        req.captain = captain;
  
        return next();
        
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: 'unauthorized'})
    }
}

