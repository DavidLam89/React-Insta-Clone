import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(element => (
                <div className='comment'>
                    <strong>{element.username}</strong> {element.text}
                </div>
            ))}
        </div>
    );
};

export default CommentSection;