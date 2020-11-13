const fs = require("fs");

const fileExists = fs.existsSync("resultreturn.json");

let contents;
let arguments = process.argv.slice(2);
let jsonObjectConverted = JSON.stringify(arguments);



// Check to see if a JSON file exists or not.
if (fileExists) {
    // If it exists, load that JSON file and convert it into an object.
    contents = fs.readFileSync("resultreturn.json", "utf-8");
    
    //if there was a third argument in the argv() array 
    if(arguments.length == 0){ // If it doesn’t send a message to the terminal saying that there was no argument found.
        console.log("there was no argument found.");
    }
    else{ //If there was, add it to the object that holds all history of arguments.
        fs.appendFileSync("resultreturn.json",jsonObjectConverted +"\n", "utf-8");//Save the object to the JSON file when the script is ending.
        console.log("add new arguments: "+ jsonObjectConverted);
    }
   
} else {
    // If it doesn’t, create a JSON file from scratch and creates a new object to work from.
   if(arguments.length == 0){
    
    fs.writeFileSync("resultreturn.json","", "utf-8");
    console.log("File created without argument");
   }
   else{
    
    fs.writeFileSync("resultreturn.json",jsonObjectConverted +"\n", "utf-8");
    console.log("File created with argument: "+ jsonObjectConverted);
   }
    
   
    
}


