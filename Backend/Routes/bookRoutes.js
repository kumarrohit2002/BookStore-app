const express=require('express')

const router=express.Router();

// create route
const {getbooks}=require('../Controllers/getbooks');
const {signup,login}=require('../Controllers/Auth');


// setup routes
router.get('/getbooks',getbooks);
router.post('/signup',signup);
router.post('/login',login);


module.exports=router;