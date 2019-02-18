import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className='container'>
            {props.posts.map(element => (
                <div>
                    <img className="thumbnail" src={element.thumbnailUrl} alt=""/>
                    <div className="username">
                        {element.username}
                    </div>
                    <img className="image" src={element.imageUrl} alt=""/>
                    <div className="likes">
                    likes: {element.likes}
                    </div>
                    <CommentSection comments={element.comments}/>
                </div>
            ))}
        </div>
    );
};

export default PostContainer;