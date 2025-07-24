//How to read a file..
var fs=require('fs')     //file system
//fs.readFile('calc.js','utf8',function(err,data){
//  console.log(data)
//})   //filename,encoding,callback function

//creating a file
//fs.writeFile('calc1.js','console.log("done")',function(err){
//    console.log("Data Saved")
//})
//filename,data to written,callback function
//if the file already exsists what will it do?
//it will replace the entire content.
//what have to if we want to append it to the file.
//fs.appendFile('calc1.js','console.log("done doing node js")',function(err){
//    console.log("Data Saved")
//})
//deleting a file
fs.unlink("calc1.js",function(err){
    console.log("deleted")
})