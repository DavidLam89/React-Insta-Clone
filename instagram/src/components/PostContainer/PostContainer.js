import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import './PostContainer.css';

const PostContainer = props => {
    let filteredposts = props.posts;
    filteredposts = props.posts.filter(element => element.username.includes(props.searchText));
    return (
        <div>
            {filteredposts.map(element => (
                <div className='box'>
                    <Post post={element}/>
                    <CommentSection comments={element.comments}/>  
                </div>
            ))}
        </div>
    );
};

export default PostContainer;