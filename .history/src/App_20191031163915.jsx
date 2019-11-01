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
import axios from 'axios';

class App extends React.Component {

  render () {
    return (
      <Router>
        <div className="App">
          <nav><Link to='/' >Home</Link> | <Link to='/mainblog' >Main Blog</Link> | <Link to='/favoritemovie' >Favorite Movie</Link> | <Link to='/favoritefood' >Favorite Food</Link> | <Link to='/about' >About</Link> | </nav>
          <Route exact path='/' component={Home}/>
          <Route exact path='/mainblog' component={Mainblog}/>
          <Route exact path='/favoritefood' component={FavoriteFood}/>
          <Route exact path='/favoritemovie' component={FavoriteMovie}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
