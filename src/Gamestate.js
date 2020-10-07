import React from 'react';
import { Window } from './Window.js';
import { Omen } from './Omen.js';
import { chooseFrom, d, getRandomInt, getRandomColorHex } from './misc_functions.js';
import { rainbow } from './Rainbow.js';

import './index.css';



class Gamestate extends React.Component{

  constructor(props) {
    super(props);
    this.splashHandler = this.splashHandler.bind(this);
    this.quaffHandler = this.quaffHandler.bind(this);
    this.ticker = 0;
    this.dev = false;
    this.state = {
      tx: 45,
      ty: 40,
      windows: [],
      playerMaxHP: 20,
      playerHP: 20,
      hasAmulet: false,
      hasBook: false,
      hasCandelabrum: false,
      hasBell: false,
      smallified: false,
      colorblind: false,
      colorshift: this.dev ? 0 : getRandomInt(0, rainbow.length),
      seeHP: this.dev ? true : false,
      seeProgress: this.dev ? true :false,
      hallucinating: false,
      omens: [],
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  isGameOverYet() {
    if (this.state.playerHP < 1) {
      this.props.wincon(false);
    } else if (this.state.omens.length > 15) {
      this.props.wincon(false);
    } else if (this.state.hasAmulet && this.state.hasCandelabrum && this.state.hasBook && this.state.hasBell) {
      this.props.wincon(true);
    }
  }
  // from https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react#35537718
  splashHandler(w) {
    this.setState({
      playerHP: this.state.playerHP - d(w.state.splashFor),
      seeHP: this.state.seeHP || w.state.hpReveal,
    });
    if (w.state.isOmen){
      const omens = this.state.omens;
      omens.push({
        x: Math.floor(Math.random()*90 - 10),//omen will be 30vw wide
        y: Math.floor(Math.random()*70),
      });
      this.setState({
        omens: omens,
      });
    }
    this.isGameOverYet();
  }

  quaffHandler(w) {
    //
    this.setState({
      playerHP: Math.min(this.state.playerMaxHP, this.state.playerHP + d(w.state.quaffFor)),
      hasAmulet: this.state.hasAmulet || w.state.isAmulet,
      hasBook: this.state.hasBook || w.state.isBook,
      hasCandelabrum: this.state.hasCandelabrum || w.state.isCandelabrum,
      hasBell: this.state.hasBell ||  w.state.isBell,
      smallified: this.state.smallified || w.state.smallifier,
      colorblind: this.state.colorblind || w.state.grayscaler,
      seeProgress: this.state.seeProgress || w.state.progressReveal,
      hallucinating: this.state.hallucinating || w.state.hallucinogenic,
    });
    if (w.state.healer) {
      this.setState({
        smallified: false,
      })
    };
    if (w.state.colorer) {
      this.setState({
        colorblind: false,
      })
    };
    if (w.state.hpHide) {
      this.setState({
        seeHP: false,
      })
    };
    if (w.state.sobering) {
      this.setState({
        hallucinating: false,
      })
    };
    if (w.state.isMimic) {
      if (this.state.hasAmulet) {
        this.setState({
          hasAmulet: false,
        })
      } else if (this.state.hasCandelabrum) {
        this.setState({
          hasCandelabrum: false,
        })
      } else if (this.state.hasBook) {
        this.setState({
          hasBook: false,
        })
      } else if (this.state.hasBell) {
        this.setState({
          hasBell: false,
        })
      } else {
        this.setState({
          playerHP: this.state.playerHP - d(8)
        })
      };
    };
    if (w.state.cancelOmen) {
      let omens = this.state.omens;
      omens.pop();
      this.setState({
        omens: omens,
      });
    }
    this.isGameOverYet();
  }

  tick() {
    this.ticker ++;
    if (this.ticker % 10) { // proceed on every tenth tick
      return;
    }
    //every 10 ticks, spawn a random window
    // window type probabilities live here
    const windows = this.state.windows;
    let seed = Math.random();
    if (seed < .05) {
      if (this.state.hasCandelabrum) {
        windows.push({
          name: "Amulet of Nerdoy",
          color: "#ff33dd",
          isAmulet: true,
        });
      } else if (this.state.hasBook) {
        windows.push({
          name: "Candelabrum",
          color: "#998800",
          isCandelabrum: true,
          colorer: true,
          //heals colorblindness
        });
      } else if (this.state.hasBell) {
        windows.push({
          name: "Necronomicon",
          color: "#222233",
          isBook: true,
          grayscaler: true,
          sobering: true,
        });
      } else {
        windows.push({
          name: "Bell of Opening",
          color: "#ccccdd",
          isBell: true,
          healer: true,
        });
      }
    } else if (seed < .65) {
      //common
      windows.push(chooseFrom([
        {
          name: "window of lesser healing",
          color: rainbow[(0 + this.state.colorshift) % rainbow.length],
          splashFor: -3,
        },
        {
          name: "window of wonderland",
          color: rainbow[(1 + this.state.colorshift) % rainbow.length],
          smallifier: true,
        },
        {
          name: "window of bugfix",
          color: rainbow[(2 + this.state.colorshift) % rainbow.length],
          healer: true,
          sobering: true,
        },
        {
          name: "window of colorblindness",
          color: rainbow[(3 + this.state.colorshift) % rainbow.length],
          grayscaler: true,
        },
        {
          name: "window of stained glass",
          color: rainbow[(4 + this.state.colorshift) % rainbow.length],
          colorer: true,
        },
        {
          name: "window of annoyance",
          color: rainbow[(12 + this.state.colorshift) % rainbow.length],
          splashFor: 3,
        },
        {
          name: "window of hurt",
          color: rainbow[(5 + this.state.colorshift) % rainbow.length],
          splashFor: 6,
        },
      ]));
    } else {
      windows.push(chooseFrom([
        //uncommon 
        {
          name: "window of introspection",
          color: rainbow[(6 + this.state.colorshift) % rainbow.length],
          hpReveal: true,
        },
        {
          name: "window of archaeology",
          color: rainbow[(7 + this.state.colorshift) % rainbow.length],
          progressReveal: true,
        },
        {
          name: "window of deeper healing",
          color: rainbow[(8 + this.state.colorshift) % rainbow.length],
          quaffFor: 10,
          splashFor: 5,
          colorer: true,
        },
        {
          name: "window of cover wounds",
          color: rainbow[(9 + this.state.colorshift) % rainbow.length],
          hpHide: true,
        },
        {
          name: "window of pain",
          color: rainbow[(10 + this.state.colorshift) % rainbow.length],
          quaffFor: -12,
          sobering: true,
        },
        {
          name: "window of hallucination",
          color: rainbow[(11 + this.state.colorshift) % rainbow.length],
          hallucinogenic: true,
        },
        {
          name: "window mimic",
          color: "#ff33dd",
          isMimic: true,
        },
        {
          name: "window of warning",
          color: rainbow[(13 + this.state.colorshift) % rainbow.length],
          isOmen: true,
        },
        {
          name: "window of cancellation",
          color: rainbow[(14 + this.state.colorshift) % rainbow.length],
          cancelOmen: true,
        },
      ]));
    };
    this.setState({
      windows: windows,
    });
  }

  render() {
    let ztop = [];
    for (let o of this.state.omens) {
      ztop.push(<Omen
        x={o.x}
        y={o.y}
        layer={this.state.omens.indexOf(o)}
      />);
    }
    let content = [];
    //for x in windows, generate Window content
    for (let w of this.state.windows) {
      content.push(<Window
        onImpact={this.splashHandler}
        onQuaff={this.quaffHandler}
        x={this.state.tx}
        y={this.state.ty}
        color={w.color}
        splashFor={w.splashFor}
        quaffFor={w.quaffFor}
        isAmulet={w.isAmulet}
        isCandelabrum={w.isCandelabrum}
        isBell={w.isBell}
        isBook={w.isBook}
        size={this.state.smallified ? 40 : 80}
        smallifier={w.smallifier}
        healer={w.healer}
        isGrayscale={this.state.colorblind}
        grayscaler={w.grayscaler}
        colorer={w.colorer}
        hpReveal={w.hpReveal}
        progressReveal={w.progressReveal}
        hpHide={w.hpHide}
        hallucinogenic={w.hallucinogenic}
        isHallucinating={this.state.hallucinating}
        sobering={w.sobering}
        isMimic={w.isMimic}
        isOmen={w.isOmen}
        cancelOmen={w.cancelOmen}
      />);
    }
    return (
      <div style={{position: "absolute"}}>
        <div id="artifacts">
          <h1 style={{
              visibility: this.state.seeProgress && this.state.hasBell ? "visible" : "hidden",
              color: "#ccccdd",
            }}>&#x2B24;
          </h1>
          <h1 style={{
              visibility: this.state.seeProgress && this.state.hasBook ? "visible" : "hidden",
              color: "#222233",
            }}>&#x2B24;
          </h1>
          <h1 style={{
              visibility: this.state.seeProgress && this.state.hasCandelabrum ? "visible" : "hidden",
              color: "#998800",
            }}>&#x2B24;
          </h1>
        </div>

        <div id="HP-bar" className="progress"
          style={{
            visibility: this.state.seeHP ? "visible" : "hidden",
          }}>
          <div className={"progress-bar " + (this.state.colorblind ? "bg-secondary" : "bg-success")} 
            style={{width: (this.state.hallucinating ? 100 * Math.random() : (this.state.playerHP / this.state.playerMaxHP * 100)).toString() + "%"}}
          />
        </div>
        {ztop}
        {content}
      </div>
    );
  }
}

export { Gamestate };
