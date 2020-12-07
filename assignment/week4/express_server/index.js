// Bring in the express package.
const express = require("express");

//Bring in the FS package
const fs = require("fs");

let fileExists = false;
let history = { submissions: []};

if (fs.existsSync("history.json")){
    let string = fs.readFileSync("history.json","utf-8");
    history = JSON.parse(string);
    console.log("history file found and loaded");
}else{
    let json = JSON.stringify(history);
  fs.writeFileSync("history.json",json,"utf-8"); 
  console.log("history file not found and creating a new one"); 
}

const bodyParser = require("body-parser");
// Run a copy of the express package.
const app = express();
// Connects our HTTP server with the Express web modue
const http = require("http").Server(app);
// Decide on the port number
const port = 3000; //3000,8080



// setup http module with the port number
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is now running on " +port);

// Tells express to load the files from [ublc_html folder when requested]
app.use("/", express.static("public_html/"));
// A 2nd website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));

app.post("/sayHello", (request, response) => {
    
    let winningNumbrt = Math.floor((Math.random() * 1000)+1);
    console.log(winningNumbrt);

    let dataReceive = request.body;

    console.log("Someone say hello :" +dataReceive.message);

    let userNumberChoice = parseInt(dataReceive.number);
    
    let historyEntry = {
        number: userNumberChoice,
        winningNumber: winningNumbrt,
        timestamp: Date.now()
    };

    // Place entry in the history object.
    history.submissions.push(historyEntry);
    // Write the history obj to the json file.
    fs.writeFileSync("history.json",JSON.stringify(history),"utf-8");

    let userWinner = false;

    console.log(winningNumbrt,userNumberChoice);

    if(userNumberChoice === winningNumbrt){
        userWinner = true;
    }
    

    let reponseObject = {userWinner, winningNumbrt,userNumberChoice};
    
    response.send(reponseObject);
});






