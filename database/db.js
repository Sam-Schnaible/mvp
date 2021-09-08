const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/player', { useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {console.log('success!')});

let playerSchema = new mongoose.Schema({
  playerName: String,
  score: Number,
  average: Number
});

let Player = mongoose.model('Player', playerSchema);

module.exports = {

  create: name => {
    let player = new Player({playerName: name});

    player.save( err => {
      if (err) {
        return err;
      } else {
        console.log('New player added');
      }
    })
  },

  retrieve:(name, callback) => {
    Player.findOne({playerName: name}).exec((err, result) => {
      if (err) {
        callback(err, null);
      } else {
        // console.log(result.playerName);
        callback(null, result.playerName);
      }
    })
  }
}