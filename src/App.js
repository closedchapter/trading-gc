import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import Apply from './pages/Apply';
import Success from './pages/Success';
import About from './pages/About';


function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/apply-now' exact component={Apply} />
        <Route path='/about-us' exact component={About} />
        <Route path='/success' exact component={Success} />
      </Switch>
    </>
  );
}

export default App;
