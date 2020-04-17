const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const aylien = require("aylien_textapi");

// set aylien API credentials
const textApi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY,
});

const app = express()
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

// Aylien Text Analysis API
app.post("/api-text", (req, res) => {
  const { text } = req.body;
  textApi.sentiment({ text }, 
    function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response)
      } else {
        console.log(error);
      }
    });
});

app.post("/api-url", (req, res) => {
  const { url } = req.body;
  textApi.sentiment({ url }, 
    function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response)
      } else {
        console.log(error);
      }
    });
});