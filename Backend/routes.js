const express = require('express');
const Router = express.Router();
const path = require('path');
const upload = require('./utills/upload.js')
const {userSignUp ,loginUser}= require('./controller/User.js');
const image = require('./controller/image.js')
const getAllPost = require('./controller/post.js')

Router.post('/user/create', upload.single('image'), userSignUp);
Router.post('/user/login',loginUser)
Router.get('/user/create/:filename', image);
Router.get('/user',getAllPost)

module.exports = Router;
