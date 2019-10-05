import React from 'react';
import BaselineSearch from 'react-md-icon/dist/BaselineSearch';

import './style.scss';

const SearchBar = ({ searchMail }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search mail" onChange={searchMail} />
      <button>
        <BaselineSearch />
      </button>
    </div>
  );
};
export default SearchBar;
