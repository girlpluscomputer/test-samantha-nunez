import React from 'react';
import BaselineInbox from 'react-md-icon/dist/BaselineInbox';

import './style.scss';

const Header = ({ setFilterBy, filterBy }) => {
  return (
    <div className="header-sidebar">
      <div className="header-text">
        Inbox
        <BaselineInbox />
        <div className="notifications">17</div>
      </div>
      <select
        className="filter"
        onChange={event => setFilterBy(event.target.value)}
        value={filterBy}
      >
        <option className="option-disabled" disabled value="filter by">
          Filter by
        </option>
        <option value="inbox">Inbox</option>
        <option value="spam">Spam</option>
        <option value="deleted">Deleted</option>
      </select>
    </div>
  );
};
export default Header;
