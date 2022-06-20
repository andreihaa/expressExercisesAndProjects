
// import express from 'express'; 
const express = require('express');
const app = express(); 
app.get("/", function(req, res) {
    res.send('<h1>hello world</h1>')
});

app.get("/contact", function(req, res) {
    res.send('contact me now please')
})

app.get("/about", function(req, res) {
    res.send('name: Andrei, email: andrei.imbrisca@outlook.com')
})

app.listen(3000, function(){
    console.log('server started on port 3000')
}); 