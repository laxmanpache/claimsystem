
import post from "../module/PostSchema.js";


// Storing expenses data in mongodb
export const CreateExpences = (req, res) => {
    console.log("hello")

    try {


        // console.log(req.body)

        const postdata = req.body;
        const newpost = new post(postdata)
        newpost.save();
        res.status(201).json("you registed sucessfully")

    }
    catch (e) {
        console.log("error occure " + e)
    }
};


//Accessing all expenses data from mongodb
export const GetAllExpences = async (req, res) => {

    try {
        const ExpensesData = await post.find({});
        //  console.log(ExpensesData);
        res.json(ExpensesData);
    }
    catch (e) {
        console.log("error occure " + e);
    }
};

// Deleting claim details from db

export const DeleteClaim =async (req,res)=>{
    try{
        console.log(req.params.invoicenumber)
         const resp = await post.remove({"invoicenumber":req.params.invoicenumber}) 
        res.json("claim delted sucessfully")
        console.log(resp)
    }
    catch(e){
        console.log("error occure" +e)
    }
}

// updating claim inside of DB

export const UpdateClaim = async(req,res)=>{
    try{
        console.log(req.body);
        const invoiceNum=req.params.invoicenumber;
        const {claimtype,visittype,name,invoicenumber,date,amount,remark}=req.body;
        const resp=await post.updateOne(

            {invoicenumber:invoiceNum},
            {$set:{
                claimtype:claimtype,
                visittype:visittype,
                name:name,
                invoicenumber:invoicenumber,
                date:date,
                amount:amount,
                remark:remark,

            },
        })
      res.json(resp);

    }
    catch(e){
        console.log('error occure'+e)
    }
}