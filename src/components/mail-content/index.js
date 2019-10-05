import React from 'react';

import './style.scss';

import MailActions from './components/mail-actions';
import MailBody from './components/mail-body';

const MailContent = ({ activeMail, setStatus }) => (
  <div className="mail-content-container">
    <MailActions activeMail={activeMail} setStatus={setStatus} />
    <MailBody activeMail={activeMail} />
  </div>
);

export default MailContent;
