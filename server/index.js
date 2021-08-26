const express = require('express');
const { create } = require('../database/db.js')
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/newPlayer', (req, res) => {
  db.create(req.data.playerName, (error, result) => {
    if (error) {
      console.log('SERVER SIDE ERROR: ', error)
    } else {
      console.log('Success!')
    }
  })
});

app.get('/retrievePlayer', (req, res) => {
  db.retrieve()
})

let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});