import User from "../module/UserSchema";
export const userSignup= async(req,res)=>{
  try{
      const exist= await User.findOne({email:req.body.email})
       if(exist)
       {
           return res.status(401).json("user already registered")
       }
      const user = req.body;
      const newuser=new User(user);
      newuser.save();
      res.status(201).json("you registed sucessfully")
  }
  catch(e){
      console.log("error"+e)
  }
}