import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/nav'
import Footer from './components/footer'

import GenerateTrendingJSON from './api'
import Home from './pages/home'


function App() {
  let TrendingJSON = GenerateTrendingJSON()
  return (
    <>
    <Nav />
      <Switch>
        <Route path='/'>
          <Home TrendingJSON={TrendingJSON} />
        </Route>
      </Switch>
    <Footer />
    </>
  );
}

export default App;
