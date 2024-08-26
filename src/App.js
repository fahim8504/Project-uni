import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import College from './pages/College';
import Department from './pages/Department';
import ChatRoom from './components/Chat/ChatRoom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './PrivateRoute';  // Import the PrivateRoute component

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/college" component={College} />
        <PrivateRoute path="/department" component={Department} />
        <PrivateRoute path="/chatroom/:college/:department/:year" component={ChatRoom} />
      </Switch>
    </div>
  );
}

export default App;
