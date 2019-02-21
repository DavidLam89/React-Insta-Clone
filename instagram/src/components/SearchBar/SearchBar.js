import React from 'react';
import './SearchBar.css';
import iglogo from './iglogo.png'
import camera from './camera.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = props => {
  return (
    <div className="searchbar-container">
      <div className="image-container">
        <img alt="camera" src={camera} className="camera-image" />
        <img alt="logo" src={iglogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" className="search-form" onChange={props.changeSearch}/>
      </div>
      <div className="social-container">
        <FontAwesomeIcon icon={['far', 'compass']} />
        <FontAwesomeIcon icon={['far', 'heart']} />
        <FontAwesomeIcon icon={['far', 'user']} />
      </div>
    </div>
  );
};

export default SearchBar;