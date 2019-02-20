import React from 'react';
import './Post.css';
import LikeSection from './LikeSection';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };

    render () {
        return (
            <div className='post'>
                        <div className="user">
                            <img className="thumbnail" src={this.props.post.thumbnailUrl} alt=""/>
                            <strong>{this.props.post.username}</strong>
                        </div>
                        <img className="image" src={this.props.post.imageUrl} alt=""/>
                        <LikeSection
                            incrementLike={this.incrementLike}
                            likes={this.state.likes}
                        />
            </div>
        );
    }
}

export default Post;