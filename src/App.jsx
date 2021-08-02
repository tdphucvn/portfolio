import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ScrollToTop from './routes/ScrollToTop';

import Main from './pages/Main';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
};

export default App;

