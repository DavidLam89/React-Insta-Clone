import React from 'react';
import './CommentSection.css';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    commentHandler = e => {
        this.setState({ comment: e.target.value });
      };

    addNewComment = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'davidlam' };
        const comments = this.state.comments;
        comments.push(newComment);
        this.setState({ comments, comment: '' });
    };
    
    render () {
        return (
            <div>
                {this.state.comments.map(element => (
                    <div className='comment'>
                        <strong>{element.username}</strong> {element.text}
                    </div>
                ))}
                <CommentInput 
                    comment={this.state.comment}
                    submitComment={this.addNewComment}
                    changeComment={this.commentHandler}
                />
            </div>
        );
    }
};

export default CommentSection;