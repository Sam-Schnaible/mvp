import React from 'react';
import ReactDOM from 'react-dom';
import axis from 'axios';
import Start from './components/Start.jsx';
import GameOver from './components/GameOver.jsx';

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


  render () {
    return (
    <div>
      <h1>Hello!</h1>
      <Start
      player={this.state.playerName}
      score={this.state.score}
      average={this.state.average}
      />
      <GameOver/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));