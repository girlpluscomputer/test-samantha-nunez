import React, { Fragment } from 'react';
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
      {activeMail.isSpam === true && <div></div>}
      {activeMail.isDeleted === true && <div></div>}
      {!activeMail.isSpam && !activeMail.isDeleted && (
        <Fragment>
          <button
            id="action-button"
            className="delete-button"
            onClick={() => setStatus(id, 'isDeleted', true)}
          >
            Delete
          </button>
          <button
            id="action-button"
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
        </Fragment>
      )}
    </div>
  );
};

MailActions.defaultProps = {
  activeMail: null,
};

MailActions.propTypes = {
  activeMail: PropTypes.object,
  setStatus: PropTypes.func.isRequired,
  displaySidebar: PropTypes.func.isRequired,
};

export default MailActions;
