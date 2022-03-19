
import post from "../module/PostSchema.js";
import nodemailer from 'nodemailer';



//Sending Email 

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'pachelaxman22@gmail.com',
        pass:'507287049346'
    }
});
let mailOptions={
    from:'pachelaxman22@gmail.com',
    to :'lakshmanpache@gmail.com',
    subject:'Regarding Claim ',
    text:` Hello you submitted your claim sucessfully......`
}

// Storing expenses data in mongodb
export const CreateExpences = (req, res) => {
    // console.log("hello")

    try {


        console.log(req.body)
        transporter.sendMail(mailOptions,function(error,info){
            if(error)
            {
                console.log('error occure'+error);
            }
            else
            {
                console.log("Email Sent "+info.response)
            }
        })  
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

export const DeleteClaim = async (req, res) => {
    try {
        console.log(req.params.invoicenumber)
        const resp = await post.remove({ "invoicenumber": req.params.invoicenumber })
        res.json("claim delted sucessfully")
        console.log(resp)
    }
    catch (e) {
        console.log("error occure" + e)
    }
}

// updating claim inside of DB

export const UpdateClaim = async (req, res) => {
    try {
       
        console.log("Hello body")
        console.log(req.body);
        const invoiceNum = req.params.invoicenumber;
        console.log(invoiceNum)
        const { claimtype, visittype, name, invoicenumber, date, amout, remark } = req.body;
        console.group(claimtype)
        console.group(visittype)
        console.group(name)
        const resp = await post.updateOne(

            { invoicenumber: invoiceNum },
            {
                $set: {
                    claimtype: claimtype,
                    visittype: visittype,
                    name: name,
                    invoicenumber: invoicenumber,
                    date: date,
                    amout: amout,
                    remark: remark,

                },
            })
        res.json(resp);

    }
    catch (e) {
        console.log('error occure' + e)
    }
}