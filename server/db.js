
import mongoose from 'mongoose';

const Connection = async() => {


  try{

   await mongoose.connect('mongodb+srv://Laxman:123@cluster0.6m5dz.mongodb.net/BLOG?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log("database connected sucessfully")

    }
    catch(e){
        console.log("error occure "+e)
    }
}


export default Connection;
