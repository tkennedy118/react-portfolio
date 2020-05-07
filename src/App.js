import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
