import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    setMails(inboxMails);
  }, [inboxMails]);

  useEffect(() => {
    showCorrectEmails();
  }, [filterBy]);

  const searchMail = event => {
    const {
      target: { value },
    } = event;
    const filteredMails = mails.filter(item => item.from.includes(value));

    if (value.length > 0) {
      setMails(filteredMails);
    } else {
      showCorrectEmails();
    }
  };

  const showCorrectEmails = () => {
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
      <Header setFilterBy={setFilterBy} filterBy={filterBy} />
      <SearchBar searchMail={searchMail} />
      <div className="mail-list-container">
        {mails.map(mail => {
          return <Mail key={mail.id} mail={mail} showMail={showMail} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
