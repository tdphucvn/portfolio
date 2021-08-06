import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ScrollToTop from './routes/ScrollToTop';
import Footer from './components/navigation/Footer';

import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import SocialPage from './pages/SocialPage';
import EcomPage from './pages/EcomPage';
import IMDBPage from './pages/IMDBPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/astranec" component={SocialPage} />
        <Route exact path="/wlessbuds" component={EcomPage} />
        <Route exact path="/hdnetmovies" component={IMDBPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  )
};

export default App;

