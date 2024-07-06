const mongoose=require('mongoose')

const bookModel=new mongoose.Schema({
    name:{
        type: 'string',
    },
    title:{
        type: 'string',
    },
    description:{
        type: 'string',
    },
    price:{
        type: Number,
    },
    category:{
        type: 'string',
    },
})

module.exports=mongoose.model('Book',bookModel);