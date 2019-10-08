import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from './components/header';
import Mail from './components/mail';
import SearchBar from './components/search-bar';

import './style.scss';

const Sidebar = ({
  inboxMails,
  spamMails,
  deletedMails,
  showMail,
  setFilterBy,
  filterBy,
}) => {
  const [mails, setMails] = useState([]);
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    showCorrectMails();
  }, [filterBy]);

  useEffect(() => {
    showCorrectMails();
    setNotifications(inboxMails.length);
  }, [inboxMails]);

  const searchMail = event => {
    const {
      target: { value },
    } = event;
    const filteredMails = mails.filter(item => item.from.includes(value));

    if (value.length > 0) {
      setMails(filteredMails);
    } else {
      showCorrectMails();
    }
  };

  const showCorrectMails = () => {
    switch (filterBy) {
      case 'spam':
        setMails(spamMails);
        break;
      case 'deleted':
        setMails(deletedMails);
        break;
      default:
        setMails(inboxMails);
        break;
    }
  };

  return (
    <div className="sidebar" id="sidebar">
      <Header
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        notifications={notifications}
      />
      <SearchBar searchMail={searchMail} />
      <div className="mail-list-container">
        {mails.map(mail => {
          return <Mail key={mail.id} mail={mail} showMail={showMail} />;
        })}
      </div>
    </div>
  );
};

Sidebar.PropTypes = {
  inboxMails: PropTypes.array.isRequired,
  spamMails: PropTypes.array.isRequired,
  deletedMails: PropTypes.array.isRequired,
  showMail: PropTypes.func.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
};

export default Sidebar;
