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

app.use(bodyParser.json())

// initialize routes
app.use('/api', require('./routers/api'));

// set port
const port = process.env.port || 3000

// listen for request
app.listen(port, function () {
    console.log(`Running RestApi on port http://localhost:${3000}`);
});