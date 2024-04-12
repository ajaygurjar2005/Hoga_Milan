const RegisterUser = require('../Models/RegisterUser.js');
const Image = require('../Models/image.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const token = require('../Models/jwt.js')
const dotenv = require('dotenv')

const userSignUp =  async (req,res,next) =>{
    const {filename,originalname,path} = req.file;
    const data = req.body;
    try{
        const newImage = new Image({
            filename,
            path,
            originalname
        })

        const saveImage = newImage.save();
        const imageUrl = `http://localhost:8000/user/create/${filename}`

        const modifiedPassword = await bcrypt.hash(data.password, 10)
        data.password = modifiedPassword;
        data.image = imageUrl;
        console.log(data,"check")

        const store = new RegisterUser(data)
        await store.save();
        const response2 = res.status(200).json({msg:'user signup successfully ',imageUrl})
    }
    catch(err){
        const response = res.status(500).json({msg:'unable to store data user', err})
    }

}

dotenv.config();
const loginUser = async (req, res) => {
    console.log(req.body.mobilenumber,'mob')
    const store = await RegisterUser.findOne({ mobilenumber: req.body.mobilenumber })
    console.log(store,'st')
    if (!store) {
        return res.status(500).json({ msg: 'User does not exist' })
    }

    try {
        const match = await bcrypt.compare(req.body.password, store.password);

        if (match) {
            
            const accessToken = jwt.sign(store.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' })
            const refreshToken = jwt.sign(store.toJSON(), process.env.REFRESH_SECRET_KEY)

            const saveToken = new token({ token: refreshToken })
            await saveToken.save()

            return res.status(200).json({ refreshToken, accessToken, msg: "User logged in successfully", user: store })
        } else {
            return res.status(401).json({ msg: 'Invalid password' })
        }
    } catch (err) {
        console.error('err',err)
        return res.status(500).json({ msg: 'Error from backend' })
    }
}


module.exports = {userSignUp,loginUser};