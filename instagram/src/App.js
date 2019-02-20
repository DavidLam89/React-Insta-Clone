import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData
    };
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
