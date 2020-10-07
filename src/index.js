import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { App } from './App.js';

import './custom-plus-bootstrap.scss';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

class Page extends React.Component {
  render() {
    return (
      
      <body>
        <nav id="navbar" class="navbar sticky-top bg-dark">
          <div class="nav-brand pl-2">
            <a href="https://ciraben.github.io/webhack">WebHack 0.4.1</a>
          </div>
          <ul class="nav navbar-nav navbar-expand">
            <li class="nav-item">
              <a class="nav-link p-2" href="https://github.com/ciraben">ciraben</a>
              {/* <a href="https://github.com/ciraben" target="_blank"> */}
              {/*   <i class="fab fa-github fa-lg"></i> */}
              {/* </a> */}
            </li>
          </ul>
        </nav>

        <div id="welcome-section" class="jumbotron jumbotron-fluid mb-0 py-0">
          <div class="container-fluid d-flex h-100 px-0">
            {/* <div class="m-auto bg-warning"> */}
              <App />
            {/* </div> */}
          </div>
        </div>
      </body>



    )
  }
}



// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

