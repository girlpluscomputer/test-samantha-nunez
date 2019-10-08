import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import BaselineArrowBackIos from 'react-md-icon/dist/BaselineArrowBackIos';

const MailActions = ({ activeMail, setStatus, displaySidebar }) => {
  const { id } = activeMail;
  return (
    <div className="mail-actions-container">
      <button
        id="return-button"
        className="return-button"
        onClick={displaySidebar}
      >
        <BaselineArrowBackIos />
      </button>
      <button
        className="delete-button"
        onClick={() => setStatus(id, 'isDeleted', true)}
      >
        Delete
      </button>
      <button
        className="spam-button"
        onClick={() => setStatus(id, 'isSpam', true)}
      >
        Spam
      </button>
      <button
        className="unread-button"
        onClick={() => setStatus(id, 'isReaded', false)}
      >
        Mark as unread
      </button>
    </div>
  );
};

MailActions.PropTypes = {
  activeMail: PropTypes.object,
  setStatus: PropTypes.func,
  displaySidebar: PropTypes.func,
};

export default MailActions;
