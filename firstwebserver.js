var express= require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200)
    res.end("<h1> Hello!! Welcome To this page</h1>")
})

app.get('/:name',(req,res)=>{
    var name = req.params.name;
    res.end("<h1> Hello "+name+"</h1>")
})

app.post('/display',(req,res)=>{
    var fname=req.body.fname
    var lname=req.body.lname
    res.end("Hello "+fname+" "+lname)

})

 app.listen('3000', ()=>{console.log('server started')})