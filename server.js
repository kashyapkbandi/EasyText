const express = require('express');
const path = require('path');
const hbs = require('hbs'); 
const bodyParser = require('body-parser')

var app = express();
const port = process.env.PORT || 3000;

// middleware
// __dirname - stores path to directory

app.use(express.static(__dirname + '/assets'));
const viewPath = path.join(__dirname,'./templates/views');

// console.log(viewPath);
// tell express to use templates instead of views. 

app.set('views',viewPath);

// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json())

app.get('',(req,res)=>{
res.render('editor');
});

app.set('view engine','hbs');






app.listen(port,()=>{
    //  console.log(__dirname);
    console.log('Server is up on port'+port);
    
    });