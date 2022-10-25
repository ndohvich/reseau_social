const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
require('dotenv').config({path: './config/.env'});
require('./config/db');

//lancement du server
const app = express();

//lancement des middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
}); 

//routes
app.use('/api/user', userRoutes);
app.use('api/post', postRoutes);

//mise en place du lancement du server
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port '+process.env.PORT); 
})