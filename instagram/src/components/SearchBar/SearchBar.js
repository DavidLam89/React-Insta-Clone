import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="image-container">
        <img alt="logo" src="./iglogo.png" className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-container">
        <div className="social">
        <FontAwesomeIcon icon="igloo" />
        </div>
        <div className="social">
        <FontAwesomeIcon icon="igloo" />
        </div>
        <div className="social">
        <FontAwesomeIcon icon="igloo" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;