//DEPENDENCIES
const cors = require('cors');
const express = require('express');

//CONFIGURATION
const app = express();


//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES HEALTH CHECKUP
app.get('/', (req, res) => {
    res.status(200).json({ data: "Service is running" });
})

//CONTROLLER ROUTE
const userController = require('./controllers/usersController.js')
app.use('/api/participants', userController)

const raffleController = require('./controllers/rafflesController.js');
app.use('/api/raffles', raffleController)

//404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("Page not found!");
});

//EXPORT
module.exports = app;
