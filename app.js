//DEPENDENCIES
const cors = require('cors');
const express = require('express');
const {CLIENT_URL} = require('./index.js')

//CONFIGURATION
const app = express();


//MIDDLEWARE
app.use(cors({origin:CLIENT_URL, credentials:true}));
app.use(express.json());


//ROUTES
app.get('/', (req, res) => {
    res.send("Welcome");
})

//404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
