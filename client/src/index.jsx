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
      returning: false,
      newName: ''
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
      },
      headers: {
        'content-type': 'application/json'
      }
    })
    .catch( err => {
      console.log('CLIENT SIDE ERROR: ', err);
    })
  }

  handleReturningSubmit = (e) => {
    e.preventDefault();
    axios.get(`/retrievePlayer/${this.state.playerName}`)
    .then( result => {
      console.log(result.data);
      this.setState({newName: result.playerName,
      returning: false
      })

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
      handleChange={this.handleChange}
      toggleReturning={this.toggleReturning}
      handleSubmit={this.handleReturningSubmit}
      /> :
     nameForm = <Start
      player={this.state.playerName}
      handleChange={this.handleChange}
      handleSubmit={this.handleNewPlayerSubmit}
      />
    this.state.returning ?
    checkReturning = null :
    checkReturning = <button className='button'
    onClick={() => this.toggleReturning()}>Returning?</button>


    return (
    <div id='container'>
      <h1>Ready Player One</h1>
      {/* <div id='form'> */}


        {checkReturning}

        {nameForm}

      <button className='button' id='play'>Play</button>

      {/* </div> */}

      {/* <GameOver/> */}

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));