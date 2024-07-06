const Book=require('../Models/bookModel')

exports.getbooks=async (req,res)=>{
    try{
        //db call
        const books=await Book.find();
        if(!books){
            res.status(400).json({
                success:false,
                message:"Error in fetching data from DB"
            })
        }

        //response send
        res.status(200).json(
            {
                success:true,
                message:"All books get SuccessFully!",
                Books: books
            }
        );

    }catch(error){
        console.log("Error: ",error);
        res.status(500).json({
            success:false,
            message:error.message
            
        })
    }
}