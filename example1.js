var a=7
var b=3
var c=a+b
console.log("The Output is:"+c)

console.log("Hello World!!!")


var http=require('http')
const { text } = require('stream/consumers')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("welcome to Node.js")
    res.write("Lets Strat Node.js")
    res.end()
}).listen(8080)