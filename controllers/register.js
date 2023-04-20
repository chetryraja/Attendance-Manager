const Users= require('../models/User');


const register= async (req,res)=>{
    
    try {
        const newuser={
            email: req.body.email,
            password: req.body.password,
            Firstname:req.body.Firstname,
            Lastname: req.body.Lastname,
            department: req.body.department,
            Roll_number: req.body.roll_number
        };
        const user = await Users.create(newuser);
        console.log(user);

        res.status(201).json(user);

    } catch (error) {
        res.status(501).json(error);
    }
}

module.exports=register;
