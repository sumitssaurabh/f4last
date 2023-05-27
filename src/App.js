import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
  );
}

export default App;
