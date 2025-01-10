const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller.js')
const authMiddleware = require('../middlewares/auth.middlewares.js')

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn('car', 'motorcycle', 'auto').withMessage('invalid')
],
    captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 characters')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

module.exports = router;