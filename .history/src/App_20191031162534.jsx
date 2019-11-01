import React from 'react';
import './App.css';
import Mainblog from './Mainblog';
import Home from './Home';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav><Link to='/' >Home</Link> | <Link to='/mainblog' >Main Blog</Link> | <Link to='/' >Home</Link> | <Link to='/' >Home</Link> | </nav>
        
      </div>
    </Router>
  );
}

export default App;