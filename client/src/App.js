import React, { Component } from 'react';
import { Container } from 'reactstrap';

import AppNavBar from './components/AppNavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <Container>
          <h1>
            Hello World
          </h1>
        </Container>
      </div>
    )
  }
}

export default App