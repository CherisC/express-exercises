const express = require('express');
const app = express();
const port = 3000;

var counter = 0;

app.post('/increment', function(req, res) {
    res.send(counter++);
})
app.post('/decrement', function(req,res){
    res.send(counter--);
})
app.get('/value', function(req, res) {
    res.send(counter);
})
app.listen('3000', () => console.log('counter server listening'));
