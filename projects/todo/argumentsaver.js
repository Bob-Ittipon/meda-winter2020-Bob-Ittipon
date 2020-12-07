const fs = require("fs");

const fileExists = fs.existsSync("resultreturn.json");

let contents;
const arg = process.argv;
let arguments = arg[2];



let newObject = {"history" : []};
 let jsonObjectConverted = JSON.stringify(newObject);

// Check to see if a JSON file exists or not.
if (fileExists) {
    // If it exists, load that JSON file and convert it into an object.
    contents = fs.readFileSync("resultreturn.json", "utf-8");
    let newjsonObjectConverted = JSON.parse(contents);
 
    //if there was a third argument in the argv() array 
    if(arguments == null){ // If it doesn’t send a message to the terminal saying that there was no argument found.
        console.log("there was no argument found.");
    }
    else{ //If there was, add it to the object that holds all history of arguments.
        
      

       
        newjsonObjectConverted.history.push(arguments);
        let lastjsonObjectConverted = JSON.stringify(newjsonObjectConverted);
        fs.writeFileSync("resultreturn.json",lastjsonObjectConverted, "utf-8");//Save the object to the JSON file when the script is ending.
    }
    

   
} else {
    // If it doesn’t, create a JSON file from scratch and creates a new object to work from.
   
    fs.writeFileSync("resultreturn.json",jsonObjectConverted, "utf-8");
    contents = fs.readFileSync("resultreturn.json", "utf-8");
    let newjsonObjectConverted = JSON.parse(contents);

    if(arguments == null){
        let lastjsonObjectConverted = JSON.stringify(newjsonObjectConverted);
        fs.writeFileSync("resultreturn.json",lastjsonObjectConverted, "utf-8");
       
    }

    else{
    newjsonObjectConverted.history.push(arguments);
    let lastjsonObjectConverted = JSON.stringify(newjsonObjectConverted);
    fs.writeFileSync("resultreturn.json",lastjsonObjectConverted, "utf-8");
   
    }
    
  
    
}


