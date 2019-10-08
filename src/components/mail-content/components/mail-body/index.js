import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import BaselineAttachFile from 'react-md-icon/dist/BaselineAttachFile';
import Mail from '../../../sidebar/components/mail';

const MailBody = ({ activeMail }) => {
  const { from, subject, body, attachements } = activeMail;
  // const [attachedFiles, setAttachedFiles] = useState([]);

  // useEffect(() => {
  //   if (Object.keys(activeMail).length > 0) {
  //     setAttachedFiles(attachements[0]);
  //   }
  // }, [activeMail]);

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

MailBody.PropTypes = {
  activeMail: PropTypes.object,
};

export default MailBody;
