import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import MailActions from './components/mail-actions';
import MailBody from './components/mail-body';

const MailContent = ({ activeMail, setStatus, displaySidebar }) => {
  const [showMail, setShowMail] = useState(false);

  useEffect(() => {
    if (Object.keys(activeMail) >= 0) {
      setShowMail(true);
    } else {
      setShowMail(false);
    }
  }, [activeMail]);

  return (
    <div className="mail-content-container">
      {showMail ? (
        <div className="no-mail-selected">Select a mail</div>
      ) : (
        <div>
          <MailActions
            activeMail={activeMail}
            setStatus={setStatus}
            displaySidebar={displaySidebar}
          />
          <MailBody activeMail={activeMail} />
        </div>
      )}
    </div>
  );
};

MailContent.PropTypes = {
  activeMail: PropTypes.object,
  setStatus: PropTypes.func,
  displaySidebar: PropTypes.func,
};

export default MailContent;
