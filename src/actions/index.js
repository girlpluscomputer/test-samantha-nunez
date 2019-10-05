import api from '../server/api';

const ADD_MAIL = 'ADD_MAIL';
const SET_ACTIVE_MAIL = 'SET_ACTIVE_MAIL';
const SET_FILTER_BY = 'SET_FILTER_BY';
const SET_MAILS = 'SET_MAILS';
const SET_INBOX_MAILS = 'SET_INBOX_MAILS';
const SET_DELETED_MAILS = 'SET_DELETED_MAILS';
const SET_SPAM_MAILS = 'SET_SPAM_MAILS';

//ASYNC ACTIONS

export const fetchMails = () => async dispatch => {
  try {
    let uuidv4 = '';
    const response = await api.get('https://api.myjson.com/bins/sexnz');
    const mails = await response.data;
    mails.map(mail => {
      uuidv4 = require('uuid/v4');
      mail.id = uuidv4();
      mail.isReaded = false;
      mail.isSpam = false;
      mail.isDeleted = false;

      dispatch(addMailToInbox(mail));
    });
  } catch (e) {
    console.log(e);
  }
};

//MAIL FUNCTIONS

export const setActiveMail = mail => ({
  type: SET_ACTIVE_MAIL,
  payload: mail,
});

export const addMailToInbox = mail => ({
  type: ADD_MAIL,
  payload: mail,
});

export const setFilterBy = option => ({
  type: SET_FILTER_BY,
  payload: option,
});

export const setMails = mails => ({
  type: SET_MAILS,
  payload: mails,
});

export const setInboxMails = mails => ({
  type: SET_INBOX_MAILS,
  payload: mails,
});

export const setSpamMails = mails => ({
  type: SET_SPAM_MAILS,
  payload: mails,
});

export const setDeletedMails = mails => ({
  type: SET_DELETED_MAILS,
  payload: mails,
});
