import React from 'react';
import './CommentSection.css';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input className="comment-form"
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;