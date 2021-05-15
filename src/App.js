import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import Apply from './pages/Apply';
import Success from './pages/Success';
import Member from './pages/memberSubmit';
import About from './pages/About';
import Navbar from './components/renders/renderNav';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/member-submit' exact component={Member} />
        <Route path='/create' exact component={Apply} />
        <Route path='/about-us' exact component={About} />
        <Route path='/success' exact component={Success} />
      </Switch>
    </>
  );
}

export default App;
