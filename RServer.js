var serverhostport='8080';


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 

app.get('*',function(req,res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('request to : '+fullUrl);
    console.log('data:')
    console.log('----');
    console.log(req.body);
    req.body.Incident.forEach(function(key,value){
        console.log("Value: "+value);
    })
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "variable": "value", "variable2": "value2" }));
})

app.post('*',function(req,res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('request to : '+fullUrl);
    console.log('data:')
    console.log('----');
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "variable": "value", "variable2": "value2" }));
})

app.listen(serverhostport);
console.log("RESTing Seppo server is running on http://localhost:" + serverhostport);