import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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

        <div className="search-bar">
        </div>

        <div className="containers">
          <PostContainer
            posts={this.state.instaData}
          />
        </div>

      </div>
    );
  }
}

export default App;
