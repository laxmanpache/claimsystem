

const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
    firstName:{
        require:true,
        type:String
    },
    lastname: {type:String},
    Email:{
        require:true,
        type:String,
        trim:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        require:true,
  
      },
    PhoneNumber:{type:String}
})

const User = mongoose.model('user',UserSchema)

export default User;