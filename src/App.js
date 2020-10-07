import React from 'react';
import { Window } from './Window.js';
import { Gamestate } from './Gamestate.js';
import imgPath from './window_wizard.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.wincon = this.wincon.bind(this);
    this.state = {
      menu: true,
      gameover: false,
      ascended: false,
    };
  }

  newGame() {
    this.setState({
      menu: false,
      gameover: false,
      ascended: false,
    })
  }

  wincon(ascended) {
    this.setState({
      menu: true,
      gameover: true,
      ascended: ascended,
    })
  }

  render() {
    if (this.state.menu) {
      const message = this.state.gameover ? (this.state.ascended ? 
        <h1 className="text-success">Congratulations, you smashed the Amulet~</h1>
        : <h1 className="text-danger">You Died...</h1>) : null;

      return (
        <div className="splash pt-5 w-100">
          <br/>
          <br/>
          <br/>
          <h1 className="display-1">WebHack</h1>
          <hr className="bg-warning w-50"/>
          <h4>Smash the Amulet!</h4>
          <p>v0.4.1</p>
          <br/>
          <br/>
          {message}
          <br/>
          <button className="btn-lg" onClick={() => this.newGame()}>
            New Game?
          </button>
          <br/>
          <br/>
          <br/>
          <p>Built by Tom Van Manen in ReactJS for <a href="https://ldjam.com/" target="_blank" rel="noopener noreferrer">Ludum Dare 47</a>.</p>
          <p>Based on the lovely & reverend <a href="https://www.nethack.org" target="_blank" rel="noopener noreferrer">NetHack</a>.</p>
          <p>©2020 <a href="https://firstdonoharm.dev/" target="_blank" rel="noopener noreferrer">Hippocratic License 2.1</a>.</p>
        </div>
      )
    }
    
    return (
      <div className="gamestate w-100">
        <Gamestate wincon={this.wincon}/>
      </div>
    )
  }
}

export { App };
