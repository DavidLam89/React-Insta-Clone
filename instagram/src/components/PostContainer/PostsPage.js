import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      instaData: [],
      searchText: ""
    };
  }

  searchHandler = e => {
    this.setState({ searchText: e.target.value });
  }

  componentDidMount(){
    this.setState({instaData: dummyData });
  }

  render() {
    return (
      <div className="App">
          <SearchBar changeSearch={this.searchHandler}/>
          <PostContainer
            posts={this.state.instaData}
            searchText={this.state.searchText}
          />
      </div>
    );
  }
}

export default PostsPage;