import React, { Fragment, useState, useEffect } from 'react';
import cx from 'classnames';
import './style.scss';

const Mail = ({ mail, showMail }) => {
  const { id, from, subject, isReaded } = mail;

  const mailStyle = cx({
    mail: true,
    blueBackground: !isReaded,
  });

  return (
    <div className="mail-container" onClick={() => showMail(id)}>
      <div className={mailStyle}>
        <div className="from">{from}</div>
        <div className="subject">{subject}</div>
      </div>
    </div>
  );
};

export default Mail;
