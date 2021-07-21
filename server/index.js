const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/facts', function(req, res) {
    res.json([{text: 'cats are small sometimes'}, {text: 'cats sleep a lot'}]);
})

app.get('/', function(req, res) {
    res.send('hello');
})


app.listen(port, function() {
    console.log('server is running on port', `http://localhost:${port}`);
})