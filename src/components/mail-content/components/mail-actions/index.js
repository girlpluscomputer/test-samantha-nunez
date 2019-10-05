import React from 'react';

import './style.scss';

const MailActions = ({ activeMail, setStatus }) => (
  <div className="mail-actions-container">
    <button
      className="delete-button"
      onClick={() => setStatus(activeMail.id, 'isDeleted', true)}
    >
      Delete
    </button>
    <button
      className="spam-button"
      onClick={() => setStatus(activeMail.id, 'isSpam', true)}
    >
      Spam
    </button>
    <button
      className="unread-button"
      onClick={() => setStatus(activeMail.id, 'isReaded', false)}
    >
      Mark as unread
    </button>
  </div>
);

export default MailActions;
