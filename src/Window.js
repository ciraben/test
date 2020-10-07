import React from 'react';
import ReactDOM from 'react-dom';

import { chooseFrom, getRandomColorHex, getRandomInt, rgbToHex, toGrayscale } from './misc_functions.js';

import './index.css';

class Window extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      ticker: 0,
      x: this.props.x,
      y: this.props.y,
      size: 80,
      isDead: false,
      dir: 2 * Math.PI * Math.random(),
      // color: rgbToHex([getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256)]),
      name: this.props.name,
      color: this.props.color,
      splashFor: this.props.splashFor,
      quaffFor: this.props.quaffFor,
      isAmulet: this.props.isAmulet,
      isCandelabrum: this.props.isCandelabrum,
      isBell: this.props.isBell,
      isBook: this.props.isBook,
      smallifier: this.props.smallifier,
      healer: this.props.healer,
      isGrayscale: this.props.isGrayscale,
      grayscaler: this.props.grayscaler,
      colorer: this.props.colorer,
      hpReveal: this.props.hpReveal,
      progressReveal: this.props.progressReveal,
      hpHide: this.props.hpHide,
      hallucinogenic: this.props.hallucinogenic,
      sobering: this.props.sobering,
      isMimic: this.props.isMimic,
      isOmen: this.props.isOmen,
      cancelOmen: this.props.cancelOmen,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      50
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  kill() {
    clearInterval(this.timerID);
    this.setState({
      isDead: true,
      x: -50,
      y: -50,
    });
    // this.props.onKill();
  }
  tick() {
    const x = this.state.x;
    const y = this.state.y;
    this.setState({
      ticker: this.state.ticker + 1,
      x: x - 0.4 * Math.cos(this.state.dir),
      y: y - 0.4 * Math.sin(this.state.dir),
    });
    if (x < 0 || 99 < x || y < 0 || 89 < y) {
      this.onImpact();
    };
    // if (this.state.ticker % 20 === 0) {
    //   this.setState({
    //     size: this.state.size + 20,
    //   });
    // };
  }
  
  // effects when the windows hit viewport bounds
  onImpact() {

    this.props.onImpact(this);
    // this.props.playerHP -= this.state.splashFor;
    this.kill();
  }

  // effect when windows are clicked
  onClick() {
    this.props.onQuaff(this);
    this.kill();
  }

  render() {

    const x = this.state.x;
    const y = this.state.y;
    const size = this.props.size;
    const color = this.props.isHallucinating ? getRandomColorHex() : (this.props.isGrayscale ? toGrayscale(this.state.color) : this.state.color);
    const symbols = this.props.isHallucinating ? chooseFrom(['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'
    ]) : '\u229E';

    let style = {
      width: size.toString() + "px",
      height: size.toString() + "px",
      fontSize: (size * 1.6).toString() + "px",
      color: color,
      transform: "translate(" + x + "vw, " + y + "vh)",
    };

    let textOffset = {
      position: "relative",
      top: (-size * .85).toString() + "px",
      left: (-size / 8).toString() + "px",
    }

    return (
      <div>
      <button 
        style={style} 
        className={this.state.isDead ? "window--dead" : "window"}
        onClick={() => this.onClick()}
      >
        <div style={textOffset}>
          {symbols}
        </div>
      </button>
        {/* <p>{this.state.x.toString()}, {this.state.y.toString()}</p> */}
      </div>
    );
  }
}
    
Window.defaultProps = {
  name: "window",
  color: "#ffffff",
  splashFor: 0,
  quaffFor: 0,
  isAmulet: false,
  isCandelabrum: false,
  isBell: false,
  isBook: false,
  smallifier: false,
  size: 80,
  healer: false,
  isGrayscale: false,
  grayscaler: false,
  colorer: false,
  hpReveal: false,
  progressReveal: false,
  hpHide: false,
  hallucinogenic: false,
  isHallucinating: false,
  sobering: false,
  isMimic: false,
  isOmen: false,
  cancelOmen: false,
};
// ========================================

ReactDOM.render(
  <Window />,
  document.getElementById('root')
);



export { Window };
