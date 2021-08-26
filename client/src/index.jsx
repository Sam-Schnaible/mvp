import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Start from './components/Start.jsx';
import GameOver from './components/GameOver.jsx';
import Returning from './components/Returning.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      playerName: '',
      score: 0,
      average: 0
    }
  }

  handleChange = (e) => {
    this.setState({playerName: e.target.value});
  }

  handleNewPlayerSubmit = () => {
    axios({
      method: 'post',
      url: '/newPlayer',
      data: {
        playerName: this.state.playerName
      }
    })
    .catch( err => {
      console.log('CLIENT SIDE ERROR: ', err);
    })
  }



  render () {
    //write logic that switches between new player and returning player form

    return (
    <div>
      <h1>Hello!</h1>
      <Start
      player={this.state.playerName}
      />
      <GameOver/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));