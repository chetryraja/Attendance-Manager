const express=require('express');
const app=express();
const connectdb= require('./db/connect')
const authRouter=require('./routes/auth')
const multer= require('multer');
const imgrouter=require('./routes/imgroute');
const bodyparser=require('body-parser');

const fs=require('fs');
const Users= require('./models/User')

require('dotenv').config();


app.use(express.json()); 

app.use(express.urlencoded({extended: true})); 

const storage = multer.memoryStorage();

const upload = multer({ storage: storage, dest:'uploads/' });

app.use(express.static('public'));

// Define a route that returns the HTML file
app.get('/', (req, res) => {
  res.sendFile('C:/Users/Aman/Desktop/HackVIta/api/public/login.html');
});

app.use('/api/imgupload',upload.any(),async (req,res)=>{

    const file = req.files[0];

    const binarydata= new Buffer.from(file.buffer);
    console.log(binarydata);


    const {email}= req.body;

    

    // console.log(email);
     console.log(req.body);

    
    
    if(req.body)
    {
        // const user=Users.findOne({email});
        try {
            // console.log(user);
            const newuser={
                email: req.body.email,
                password: req.body.password,
                Firstname:req.body.Firstname,
                Lastname: req.body.Lastname,
                department: req.body.department,
                Roll_number: req.body.roll_number,
                picture: binarydata
            };
            const user = await Users.create(newuser);
            console.log(user);
            
            // const user= await Users.findOneAndUpdate({ email:email},{picture:binarydata},{new:true});
            // console.log(user.Firstname);
                res.status(200).json({user_info:{email: user.email, user_id: user._id, roll_number:user.Roll_number, FirstName:user.Firstname, LastName: user.Lastname,department: user.department, total:user.total, present: user.present}})
            
            res.end();    
        } catch (error) {
            
            console.log(error);
            res.status(404).json(error);

        }

    } 
    
    else
        res.status(501).json("server error");

}); // or specify the field name of the file input instead of any()


app.use('/api/auth',authRouter);


app.use('/api/auth/test',upload.any(), async (req,res)=>{

    console.log("test");
    console.log(req.body);
    console.log(req.files[0]);

    res.status(200).json(req.body);

})

//app.use('/api/imgupload',imgrouter);

const start= async ()=>{
    try {
        await connectdb(process.env.MONGO_URL);
        app.listen(3000,()=>{
            console.log("Server Started")
        })

    } catch (error) {
        
        console.log(error)
    }
}

start();