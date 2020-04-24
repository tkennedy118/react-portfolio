import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav/index';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={['/', '/about']} component={About} />
          <Route exact path={'/portfolio'} component={Portfolio} />
          <Route component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
