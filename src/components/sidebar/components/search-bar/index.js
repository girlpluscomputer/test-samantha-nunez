import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import BaselineSearch from 'react-md-icon/dist/BaselineSearch';

const SearchBar = ({ searchMail }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={searchMail} />
      <button>
        <BaselineSearch />
      </button>
    </div>
  );
};

SearchBar.PropTypes = {
  searchMail: PropTypes.func,
};

export default SearchBar;
