const express = require('express');
const { create, retrieve } = require('../database/db.js')
const bodyParser = require('body-parser');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/newPlayer', (req, res) => {
  create(req.body.playerName, (error, result) => {
    if (error) {
      console.log('SERVER SIDE ERROR: ', error)
    } else {
      console.log('Success!')
    }
  })
});

app.get('/retrievePlayer/:name', (req, res) => {
  retrieve(req.params.name, (error, result) => {
    if ( error) {
      console.log('SERVER SIDE ERROR: ', error)
    } else {
      res.status(200).send(result);
    }
  })
})

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});