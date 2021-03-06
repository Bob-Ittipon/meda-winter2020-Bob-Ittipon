const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dbCredientials = "mongodb+srv://todoUser:todoUser@cluster0.h4e16.mongodb.net/todoApp?retryWrites=true&w=majority"
;

const dboptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};

let dbConnection = mongoose.connect(dbCredientials, dboptions, (error) =>{
    if(error){
        console.log("Mongoose error: "+ error);
    }
    else{
        console.log("Mongoose connection opened.");
    }
});


const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port "+ port);

app.use("/", express.static("client/"));