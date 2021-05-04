const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const apiRouter= require('./routes/api')

const app = express();

require("./db");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}));


app.use('/api', apiRouter);

app.listen(5000, ()=>{
    console.log('servidor corriendo!')
});

