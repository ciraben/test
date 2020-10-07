import React from 'react';

// import {} from './misc_functions.js';

import imgPath from './window_wizard.png';
import './index.css';

// const imgPath = process.env.PUBLIC_URL;

class Omen extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     x: this.props.x,
  //     y: this.props.y,
  //     layer: this.props.layer,
  //   }
  // };

  render(){
    return (
      <div>
      <img src={imgPath} alt="Window Error"
        className="omen"
        style={{
          left: this.props.x.toString() + "vw",
          top: this.props.y.toString() + "vh",
          zIndex: (this.props.layer + 2000).toString(),
        }}
      />
        <p style={{color: "black"}}>wizards rule</p>
      </div>
    );
  };
}

export { Omen };
