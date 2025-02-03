const mapService = require('../services/maps.service.js')
const { validationResult } = require('express-validator')


module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates)
        console.log(coordinates);
        
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found' })
    }
}