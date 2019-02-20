import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faHeart)
library.add(faCompass)
library.add(faUser)

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: []
    };
  }

  componentDidMount(){
    this.setState({instaData: dummyData });
  }

  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostContainer
            posts={this.state.instaData}
          />
      </div>
    );
  }
}

export default App;
