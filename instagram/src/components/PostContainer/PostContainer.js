import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className='container'>
            {props.posts.map(element => (
                <div className='box'>
                    <Post post={element}/>
                    <CommentSection comments={element.comments}/>  
                </div>
            ))}
        </div>
    );
};

export default PostContainer;