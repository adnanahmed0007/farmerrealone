 import UserSiging from "../../models/SigningModel.js";
 import bcrypt from "bcrypt"
 import Generatetoken from "../../utils/GenerateToke.js";
const Signup =async(req,res)=>
{
    const {fullName,address,age,email,phoneNumber,password}=req.body;
    
    try{
        if(fullName&&address&&age&&email&&phoneNumber&&password)
        {
            const hashedpassword=await bcrypt.hash(password,10)
              const findCheck=await UserSiging.findOne({
             email

              })
              if(findCheck)
              {
                return res
                .status(400)
                .json({
                    message:"user is already regsister"
                })
            }
            const newUser=  new UserSiging({
                fullName,
                address,
                age,
                email,
                phoneNumber,
                password:hashedpassword,

            })
            if(newUser)
            {
             const Generatetokensign=await Generatetoken(newUser._id,res)
            
            const saved=await newUser.save();
            if(!saved)
            {
                return res
                .status(400)
                .json({
                    message:"user can not be created",
                    
                })
            }
            console.log(newUser)
            return res
            .status(200)
            .json({
                message:"user created succesfully",
                newUser,
                
            })
        }
           
        }
        else{
            return res
        .status(400)
        .json({
            message:"All fileds are required"
        })
        }

    }
    catch(e)
    {
        console.log(e)
        return res
        .status(400)
        .json({
            message:e
        })
    }
}
export default Signup