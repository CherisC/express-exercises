const express = require('express');
const app = express();
const port = 3000;

var counter = 0;

app.post('/increment', function(req, res) {
    counter++;
    res.send("Current counter is + " + counter);
})
app.post('/decrement', function(req,res){
    counter--;
    res.send("Current counter is " + counter);
})
app.get('/value', function(req, res) {
    res.send("Current counter is " + counter);
})
app.listen(port, () => console.log(`counter server listening`));
//changed 3000 to port in app.listen
//removed counter++/-- from res.send()