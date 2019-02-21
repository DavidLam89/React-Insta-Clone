import React from 'react';
import './Post.css';
import LikeSection from './LikeSection';
import styled, { css } from 'styled-components';
import SearchBarContainer from '../SearchBar/SearchBar';

const Thumbnail = styled.img`
    height: 3rem;
    border-radius: 50%;
    margin: 0.5rem;
`;

const UserName = styled.strong`
    font-size: 1rem;
    ${props =>
        props.type === 'stronger' &&
        css`
          font-size : 1.2rem;
        `}
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes,
            likeStatus: false
        }
    }

    incrementLike = () => {
        this.setState({ likeStatus: !this.state.likeStatus });
    }
    

    render () {
        return (
            <div className='post'>
                        <User>
                            <Thumbnail src={this.props.post.thumbnailUrl} alt=""/>
                            <UserName type="stronger">{this.props.post.username}</UserName>
                        </User>
                        <img className="image" src={this.props.post.imageUrl} alt=""/>
                        <LikeSection
                            incrementLike={this.incrementLike}
                            likes={this.state.likes}
                            likeStatus={this.state.likeStatus}
                        />
                        {/* <SearchBarContainer></SearchBarContainer>
                        <SearchBarContainer></SearchBarContainer> */}
            </div>
        );
    }
}

export default Post;