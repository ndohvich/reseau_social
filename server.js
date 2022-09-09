const express = require('express');
const userRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
require('dotenv').config({path: './config/.env'});
require('./config/db');

//lancement du server
const app = express();

//lancement des middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api/user', userRoutes);

//mise en place du lancement du server
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port '+process.env.PORT); 
})