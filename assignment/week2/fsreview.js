const fs = require("fs");

let contents = fs.readFileSync("smallessay.txt","utf-8");

fs.writeFileSync("example2.txt", contents,"utf-8");

fs.appendFileSync();//adds contents to the end of the file

fs.existsSync("example.txt");