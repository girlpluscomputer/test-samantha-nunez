import React from 'react';
import BaselineAttachFile from 'react-md-icon/dist/BaselineAttachFile';

import './style.scss';

const MailBody = ({ activeMail }) => {
  const { from, subject, body } = activeMail;

  return (
    <div className="mail-content">
      <div className="from">{from}</div>
      <div className="subject">{subject}</div>
      <div className="mail">
        <div className="mail-body">{body}</div>
        <div className="mail-options">
          <button className="attach-button">
            <BaselineAttachFile />
          </button>
          <button className="reply-button">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default MailBody;
