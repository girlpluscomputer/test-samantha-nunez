import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import './style.scss';

import BaselineAttachFile from 'react-md-icon/dist/BaselineAttachFile';

const Mail = ({ mail, showMail }) => {
  const { id, from, subject, isReaded, date } = mail;

  const mailStyle = cx({
    mail: true,
    blueBackground: !isReaded,
  });

  const mailMark = cx({
    mailMark: true,
    blue: !isReaded,
  });

  return (
    <div className="mail-container" onClick={() => showMail(id)}>
      <div className={mailStyle}>
        <div className={mailMark}></div>
        <div className="mail-text">
          <div className="from">{from}</div>
          <div className="subject">{subject}</div>
        </div>

        <div className="information">
          <div className="date">{date}</div>
          <div className="attach-icon">
            <BaselineAttachFile />
          </div>
        </div>
      </div>
    </div>
  );
};

Mail.propTypes = {
  mail: PropTypes.object.isRequired,
  showMail: PropTypes.func.isRequired,
};

export default Mail;
