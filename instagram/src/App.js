import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import authenticate from './components/Authentication/authenticate';
import LoginPage from './components/Login/Login';

library.add(faHeart)
library.add(faCompass)
library.add(faUser)

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
          <PostsPage />
      </div>
    );
  }
}

export default authenticate(App)(LoginPage);
