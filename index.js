const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose')
let apirouter = require('./routes')
const Quote = require('./models')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/quotes');
var db = mongoose.connection;c

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use('/api', apirouter);

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

app.post('/quotes/store', (req, res) => {
    Quote.create(req.body, (error, quote) => {
        res.redirect('/')
    })
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})