const RegisterUser = require('../Models/RegisterUser');

const getAllPost = async (req,res) =>{
    const data = await RegisterUser.find({});
    if(!data){
        res.status(500).json({msg:'Problem in backend'})
    }

    res.status(200).json({data})
}

module.exports = getAllPost;