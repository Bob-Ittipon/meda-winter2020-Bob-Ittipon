//Json rules 1 All keys must be in quotes
//2 no functions allowed
//3 only one object
//4 no comments

const fs = require("fs");
const fileExists = fs.existsSync("example.json");
let contents;

if(fileExists){
   contents = fs.readFileSync("example.json","utf-8");
}else{
    console.log("File does not exists");
    return;
}

let contentsJsonobject = JSON.parse(contents);


for(i in contentsJsonobject.objects){
    console.log(contentsJsonobject.objects[i].phone);
}
