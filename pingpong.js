const express = require('express');

const app = express();

app.get('/ping', function(req, res, next) {
    res.send('pong');
})
app.listen('3000', function() {
    console.log('Hello from our server');
})