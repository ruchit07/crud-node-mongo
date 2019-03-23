const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const app = express();
const mongoose = require('mongoose');

// Mongo db connection
let db_url = 'mongodb://localhost:27017/product';
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB,  { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Register routes
let port = 5300;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})