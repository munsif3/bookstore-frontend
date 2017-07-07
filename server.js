'use strict';

// Adding Dependencies
const express = require('express');

// Creating the Express Application
const app = express();

// Setting the PORT
const port = process.env.PORT || 3030;

// Enabling file usage for Frontend
app.use('/app', express.static(__dirname + '/public'));
app.use('/app/mods', express.static(__dirname + '/bower_components'));

// Returning for Root Request
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Create Server and Listen
app.listen(port, err => {
    if (err) {
        console.log('Error listening on port ' + port);
        return;
    }
    console.log('Keep an ear on ' + port);
});