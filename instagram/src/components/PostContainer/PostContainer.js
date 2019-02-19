import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className='container'>
            {props.posts.map(element => (
                <div className='box'>
                    <Post post={element}/>
                    <CommentSection comments={element.comments}/>
                    <div className="input">
                    Add a comment... 
                    </div>     
                </div>
            ))}
        </div>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;