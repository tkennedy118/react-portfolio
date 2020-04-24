import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/styles/app.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
