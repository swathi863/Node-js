const express = require('express');
const app = express();
//specifying a Router..
app.get('/',function(req,res){
  console.log("Helloworld")
  res.send("Hello World!!!")
})//two parameters 1.url
app.get('/swathi',function(req,res){
  const id=req.query.id

  res.send('welcome back ...'+id)
})
app.get('/swathi/:id',function(req,res){
  const id=req.params.id
  res.send("hey Swathi"+id)
})
app.listen(9000,function(req,res){
  console.log('Running...')
});