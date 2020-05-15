import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import './app.css';

function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={['/', '/about']} component={About} />
          <Route component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
