import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
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

export default PostsPage;