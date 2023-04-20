
const Users=require('../models/User');
const upload=require('../multer/multer_storage');

const Image_upload=async (req,res)=>{

    console.log(req.file);
    console.log("in image");
    if(req.body)
    {

        upload(req,res,(err)=>{
            if(err){
                console.log(err);
            }
            else{

                const {email}=req.body;

                const user= Users.findOne({email});
                // user.image.data= req.file.filename;
                // user.image.contentType = "image/png";
                // user= Users.findOneAndUpdate(email,user);

                res.status(201).json(user);
            }
        })
        
    }

    else
        res.status(501).json("internal server error");
}

module.exports=Image_upload;