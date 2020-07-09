import React from 'react';
import './App.css';
import Nav from './Nav';
import Search from './Search';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
