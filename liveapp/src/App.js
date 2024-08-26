import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/chat/:college/:department/:year" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default App;
