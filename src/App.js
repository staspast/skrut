import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <Route path={'/login'} component={Login}/>
            <Route path={'/chat'} component={Chat}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
