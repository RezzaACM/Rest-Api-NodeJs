const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();

// connect mongodb
mongoose.connect('mongodb://localhost/ninjago', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise
const db = mongoose.connection;

if (!db) {
    console.log('Error connnection db')
} else {
    console.log('Db connected successsfully')
}

// to send body 
app.use(bodyParser.json())


// send message to default url
app.get('/', (req, res) => res.send('Welcome to The Ninja API'))

// initialize routes
app.use('/api', require('./routers/api'));

// error handling middleware

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).send({
        status_code: 404,
        status_message: "Not Found"
    });
});
//The 404 Route (ALWAYS Keep this as the last route)
app.post('*', function (req, res) {
    res.status(404).send({
        status_code: 404,
        status_message: "Not Found"
    });
});

// set port
const port = process.env.port || 3000

// listen for request
app.listen(port, function () {
    console.log(`Running RestApi on port http://localhost:${3000}`);
});