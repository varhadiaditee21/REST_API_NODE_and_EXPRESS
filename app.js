const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Create ROUTES.
app.get('/', (req,res) => {
    res.send('We are home');
})

//connect to db
mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
console.log('connected to DB')
);

//HOW DO WE START LISTENING TO THE SERVER 
app.listen(3000);