const express  = require('express');
var bodyParser = require('body-parser');
const app= express();
const fs = require('fs');
const db = require('mongoose');
const configdb = require('./config/databases.js');
const todo = require('./Model/Users.js')

db.connect(configdb.url)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function(req,res){
    res.send('show login');
})


app.post('/login',function(req,res){
    fs.readFile('log.json','utf8',function readFileCallback(err , data){
        if(err){
            console.log(err)
        }else {
            console.log(data);
        }
    })
});


app.post('/register',function(req,res){
    var user = req.body;
    console.log('show user',user);  
    const todos = new todo(user)
    todos.save(function(err) {
        if (err) {  
            console.error(err);
           
        } else {
            console.log('show save');
        }
    });
    res.send(user);
})



app.listen(3000,function(){
    console.log('Example app listening on port 3000!')    
})