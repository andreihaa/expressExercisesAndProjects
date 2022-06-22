const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
//being part of node, we have to access bodyParser through app
app.use(bodyParser.urlencoded({extended: true})); 

//urlencoded used for html forms
// bodyParser can be .urlencoded()/ .json() / .text()
// {extended: true} - lets us post nested objects

app.get('/', function(req,res){
    //__dirname gives the exact location of the folder in which the calculator.js 
    //file is situated,no matter the place where the project is stored
    res.sendFile(__dirname + '/index.html')
}); 

//install npm body-parser - 
app.post('/', function(req, res){
     //num1/num2 come from the html input name
    let num1 = Number(req.body.num1); 
    let num2 = Number(req.body.num2); 
    let result = num1 + num2; 
    res.send(`the result of the calculation is ${result}`)
})

app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function(req, res){
    //weight/height come from the html input name
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = weight/(height * height);

    res.send('your BMI is' + " " + bmi)
})

app.listen(3000, function() {
    console.log('server is running on server 3000');
})