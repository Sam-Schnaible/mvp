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
      average: 0,
      returning: false
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

  handleReturningSubmit = () => {
    axios.get('/retrievePlayer',
    {
      params: {
        name: this.state.playerName
      }
    })
    .then( result => {
      console.log(result.score, result.avg);
      //this is where I would pass this to the game
      //so it could display player information
    })
  }

  toggleReturning = () => {
    this.state.returning === false ?
    this.setState({returning: true}) :
    this.setState({returning: false})
  }


  render () {
    //write logic that switches between new player and returning player form
    let nameForm;
    let checkReturning;
    this.state.returning ?
    nameForm = <Returning
      toggleReturning={this.toggleReturning}
      /> :
     nameForm = <Start
      player={this.state.playerName}
      handleChange={this.handleChange}
      handleSubmit={this.handleNewPlayerSubmit}
      />
    this.state.returning ?
    checkReturning = null :
    checkReturning = <button
    onClick={() => this.toggleReturning()}>Returning?</button>


    return (
    <div>
      <h1>Hello!</h1>
      {checkReturning}
      {nameForm}

      <button>Play</button>
      <GameOver/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));