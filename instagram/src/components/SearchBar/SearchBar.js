import React from 'react';
import './SearchBar.css';
import iglogo from './iglogo.png'
import camera from './camera.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  padding: 0.5rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
const SocialContainer = styled.div`
  font-size: 1.5rem;
  color: gray;
  width: 8rem;
  display: flex;
  justify-content: space-evenly;
`;

const SearchBar = props => {
  return (
    <SearchBarContainer>
      <ImageContainer>
        <img alt="camera" src={camera} className="camera-image" />
        <img alt="logo" src={iglogo} className="logo-image" />
      </ImageContainer>
      <div>
        <input type="text" placeholder="Search" className="search-form" onChange={props.changeSearch}/>
      </div>
      <SocialContainer>
        <FontAwesomeIcon icon={['far', 'compass']} />
        <FontAwesomeIcon icon={['far', 'heart']} />
        <FontAwesomeIcon icon={['far', 'user']} />
      </SocialContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;