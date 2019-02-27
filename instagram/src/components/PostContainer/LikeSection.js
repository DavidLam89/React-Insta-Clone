import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Post.css';

const LikeSection = props => {
    let result = props.likes;
    let myClassName = "likes";
    if (props.likeStatus) {
        result += 1;
        myClassName = "liked";
    }
    return (
        <div>
            <div className={myClassName} onClick={props.incrementLike}>
                <FontAwesomeIcon icon={['far', 'heart']} />
            </div>
            <div>
                <strong>{result} likes</strong>
            </div>
        </div>
    );
};

export default LikeSection;