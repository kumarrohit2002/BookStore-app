const User=require('../Models/userModel');
const bcrypt=require('bcrypt');

exports.signup = async (req, res) => {
    try{
        // featch data
        const {fullName, email, password}=req.body;

        //validation
        if(!fullName || !email || !password){
            res.status(400).json({
                success: false,
                message: 'All field are Required'
            })
        }

        //if user already exists
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        //secure password
        let hashPassword;
        try{
            hashPassword=await bcrypt.hash(password,10);
        }catch(error){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password"
            });
        }
        //register user with secure password
        const user = await User.create({fullName, email, password:hashPassword})
        //send response
        res.status(200).json({
            success: true,
             message:"User registered successfully"
        })

    }catch(error){
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


exports.login=async (req,res)=>{
    try{
        //fetch data from req body
        const {email,password}=req.body;
        //validation on email or password
        if(!email || !password){
            res.status(400).json({
                success: false,
                message: 'All field are Required'
            })
        }

        //check for registered user
        const user = await User.findOne({email: email});

        if(!user){
            res.status(400).json({
                success: false,
                message: 'User not registered,please SignUp'
            })
        }

        //verify password
        if(await bcrypt.compare(password,user.password)){
            user.password=undefined;
            res.status(200).json({
                success:true,
                message:"User Login Successfully",
                user:user,
            })
        }else{
            res.status(400).json({
                success: false,
                message: 'Invalid password!,check again please'
            })
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}