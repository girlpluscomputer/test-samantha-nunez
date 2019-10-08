import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ setFilterBy, filterBy, notifications }) => {
  return (
    <div className="header-sidebar">
      <div className="header-text">
        Inbox
        <div className="notifications">{notifications}</div>
      </div>
      <select
        className="filter"
        onChange={event => setFilterBy(event.target.value)}
        value={filterBy}
      >
        <option value="default">Filter by</option>
        <option value="inbox">Inbox</option>
        <option value="spam">Spam</option>
        <option value="deleted">Deleted</option>
      </select>
    </div>
  );
};

Header.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  notifications: PropTypes.number.isRequired,
};

export default Header;
