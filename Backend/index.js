const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// Use CORS middleware
app.use(cors());

//load config from env file
require('dotenv').config();

const PORT=process.env.PORT ||4000;

//connection to database
const dbConnect=require('./Config/database');
dbConnect();




// //middleware to parse json request body
app.use(express.json());

//import routes for Todo Api
const bookRoutes=require('./Routes/bookRoutes');
// //mount the todo aspi routes
app.use('/api/v1',bookRoutes);



//start server  
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})




// default route
app.get('/',(req,res)=>{
    res.send(`<h1>This is HomePage baby</h1>`);
})