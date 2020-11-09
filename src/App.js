import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './component/home';
import { Contact } from './component/contact';
import { Nav } from './component/nav';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
