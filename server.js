require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);


// API file for interacting with MongoDB
const tree = require("./server/routes/tree");

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/passportChallenge')));


app.use(bodyParser.json());
// API location


app.use("/tree", tree);



// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/passportChallenge/index.html'));
});

//Set Port

var port = process.env.PORT || 4200;



server.listen(port, () => console.log("connected and listening on port ", port));
