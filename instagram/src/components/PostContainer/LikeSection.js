import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Post.css';

const LikeSection = props => {
    return (
        <div>
            <div className="likes" onClick={props.incrementLike}>
                <FontAwesomeIcon icon={['far', 'heart']} />
            </div>
            <div>
                <strong>{props.likes} likes</strong>
            </div>
        </div>
    );
};

export default LikeSection;