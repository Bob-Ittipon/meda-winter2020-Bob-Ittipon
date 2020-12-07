const mongoose = require("mongoose");

// the URL to connect to MongoDB Atlas.
const db = "mongodb+srv://mongoosePracticeUser:Pl%2Cokmijn@cluster0.h4e16.mongodb.net/bobdb?retryWrites=true&w=majority";

// mongodb+srv://mongoosePracticeUser:<password>@cluster0.h4e16.mongodb.net/<dbname>?retryWrites=true&w=majority
const options = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

mongoose.connect(db, options ,(error) =>{

    if (error){
        console.log("there was an error: ", error);
    }
    else{

        console.log("Success fully conected to MongoDb");

    }
    
});

let Schema = mongoose.Schema;
let exampleSchema = new Schema({
    username: String,
    password: String,
    createdDate: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("bobcols", exampleSchema);

let exampleDocument = new exampleModel({
    username: "Bob Ittipon",
    password: "123456",
    createdDate: "Dec 02 2020",
    age: 30,
    accountClosed: false
    });
    exampleDocument.save((error) =>{
    if(error){

        console.log(error);
    }
    else{
        console.log("Document save");
    }

    // mongoose.disconnect();
    // console.log("connection disconnect");
    });






