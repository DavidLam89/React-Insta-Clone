import React from 'react';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(element => (
                <div>
                    <strong>{element.username}</strong> {element.text}
                </div>
            ))}
        </div>
    );
};

export default CommentSection;