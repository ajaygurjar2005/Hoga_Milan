const mongoose = require('mongoose');
const path = require('path')
const Image = require('../Models/image.js');

const image = async (req, res) => {
    try{
        const filename = req.params.filename;
    const image = await Image.findOne({ filename })

    if (!image) {
        res.status(500).json({ msg: 'Sorry Image cannot found' })
    }
    const imageUrl = path.join(__dirname, '..', 'uploads', filename)

    res.setHeader('Content-Type', 'image/jpeg');

    res.sendFile(imageUrl);
    }
    catch (err){
        res.status(500).json({msg:'Error in backend'})
    }
}


module.exports = image;