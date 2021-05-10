import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Apply from './pages/Apply';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
        <Route path='/apply-now' exact component={Apply} />
      </Switch>
    </>
  );
}

export default App;
