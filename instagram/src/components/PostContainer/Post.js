import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
    return (
        <div className='post'>
                <div>
                    <div className="user">
                        <img className="thumbnail" src={props.post.thumbnailUrl} alt=""/>
                        <strong>{props.post.username}</strong>
                    </div>
                    <img className="image" src={props.post.imageUrl} alt=""/>
                    <div className="likes">
                    <strong>{props.post.likes} likes</strong>
                    </div>
                </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
    })
  };

export default Post;