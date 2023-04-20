const Users=require('../models/User');

const Login= async (req,res)=>{
    try {
        
        console.log("LOGIN");

        console.log(req.body)

        const {email,password}=req.body;

        const user= await Users.findOne({email});

        if(!user)
        {
            res.status(404).json("Wrong Username or Password");
        }
        else
        {
            // console.log(user.Firstname);

            if(user.password!=password)
                res.status(404).json("Wrong Username or Password");

            else
                res.status(200).json({user_info:{email: user.email, user_id: user._id, roll_number:user.Roll_number, FirstName:user.Firstname, LastName: user.Lastname,department: user.department, total:user.total, present: user.present}})
        }

    } catch (error) {
        
        res.status(501).json(error);
    }
}

module.exports=Login;