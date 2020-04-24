import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav/index';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path={'/portfolio'} component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
