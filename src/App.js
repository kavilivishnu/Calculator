import React from 'react';
import './App.css';
// import Hello from './Calculator/Hello';
import Logic from './Calculator/Logic';
import Trials from './Calculator/Trials';
import Nav from './Calculator/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Hello /> */}
        <Nav />
        <Switch>
          <Route path="/Logic" component={Logic} />
          <Route path="/Trials" component={Trials} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
