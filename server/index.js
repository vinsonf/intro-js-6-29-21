const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [];

app.get('/facts', function(req, res) {
    res.json([{text: 'cats are small sometimes'}, {text: 'cats sleep a lot'}]);
});

app.post('/register', function(req, res) {
    console.log(req.body);
    if (req.body.username) {
        users.push(req.body);
        res.json({
            success: true,
            message: 'you have successfully registered.'
        });
    } else {
        res.json({
            success: false,
            message: 'you have not successfully registered.'
        });
    }
   
});
app.post('/login', function(req, res) {
    console.log(req.body);
    const user = users.find( user => user.username === req.body.username);
    if (user) {
        res.json({
            success: true,
            message: 'we found that user',
            data: user,
            users: users
        });
    } else {
        res.json({
            success: false,
            message: 'no user found',
            data: user,
            users: users
        });  
    }
  
});

app.get('/', function(req, res) {
    res.send('hello');
})


app.listen(port, function() {
    console.log('server is running on port', `http://localhost:${port}`);
})