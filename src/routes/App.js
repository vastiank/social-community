import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../views/Home';
import Login from '../views/Login';
import Users from '../views/Users';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/usuarios" component={Users} />
      {/* <Route exact path="/crear" component={} /> */}
    </Switch>
  </BrowserRouter>
)

export default App;
