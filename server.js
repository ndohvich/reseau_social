const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');

//lancement du server
const app = express();


//routes
app.use('/api/user', userRoutes);

//mise en place du lancement du server
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port '+process.env.PORT); 
})