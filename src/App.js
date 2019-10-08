import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions';

import './style.scss';

import Sidebar from './components/sidebar';
import MailContent from './components/mail-content';

const App = props => {
  const {
    fetchMails,
    mails,
    inboxMails,
    spamMails,
    deletedMails,
    setActiveMail,
    setInboxMails,
    setSpamMails,
    setDeletedMails,
    setFilterBy,
    activeMail,
    setMails,
    filterBy,
  } = props;
  useEffect(() => {
    setInterval(fetchMails, 90000);
  }, []);

  useEffect(() => {
    updateMails(mails);
  }, [mails]);

  useEffect(() => {
    setActiveMail({});
  }, [filterBy]);

  const updateMails = mails => {
    const spamMails = mails.filter(mail => mail.isSpam);
    const deletedMails = mails.filter(mail => mail.isDeleted);
    const inboxMails = mails.filter(mail => !mail.isSpam && !mail.isDeleted);

    setInboxMails(inboxMails);
    setSpamMails(spamMails);
    setDeletedMails(deletedMails);
  };

  const showMail = id => {
    const mail = mails.find(item => item.id === id);

    setActiveMail(mail);

    if (!mail.isReaded) {
      setStatus(id, 'isReaded', true);
    }

    document.getElementById('sidebar').style.display = 'none';
  };

  const displaySidebar = () => {
    document.getElementById('sidebar').style.display = 'block';
  };

  const setStatus = (mailId, status, value) => {
    const mailFound = mails.find(item => item.id === mailId);
    const newEmail = { ...mailFound, [status]: value };
    const newMails = [...mails];
    const indexOfMail = newMails.findIndex(item => item.id === mailFound.id);
    newMails[indexOfMail] = newEmail;

    setMails(newMails);
  };

  return (
    <div className="inbox">
      <Sidebar
        inboxMails={inboxMails}
        spamMails={spamMails}
        deletedMails={deletedMails}
        showMail={showMail}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <MailContent
        activeMail={activeMail}
        setStatus={setStatus}
        displaySidebar={displaySidebar}
      />
    </div>
  );
};

App.propTypes = {
  fetchMails: PropTypes.func.isRequired,
  mails: PropTypes.array.isRequired,
  inboxMails: PropTypes.array.isRequired,
  spamMails: PropTypes.array.isRequired,
  deletedMails: PropTypes.array.isRequired,
  setActiveMail: PropTypes.object.isRequired,
  setInboxMails: PropTypes.func.isRequired,
  setSpamMails: PropTypes.func.isRequired,
  setDeletedMails: PropTypes.func.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  activeMail: PropTypes.object.isRequired,
  setMails: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

const mapStateToProps = ({ mailsReducer }) => ({
  activeMail: mailsReducer.activeMail,
  mails: mailsReducer.mails,
  inboxMails: mailsReducer.inboxMails,
  spamMails: mailsReducer.spamMails,
  deletedMails: mailsReducer.deletedMails,
  filterBy: mailsReducer.filterBy,
});

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default DefaultApp;
