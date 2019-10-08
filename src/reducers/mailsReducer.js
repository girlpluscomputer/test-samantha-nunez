const initialState = {
  activeMail: {},
  mails: [],
  inboxMails: [],
  spamMails: [],
  deletedMails: [],
  filterBy: 'inbox',
  displayMail: false,
};

const mailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_MAIL':
      return { ...state, activeMail: action.payload };
    case 'ADD_MAIL':
      return { ...state, mails: [action.payload, ...state.mails] };
    case 'SET_FILTER_BY':
      return { ...state, filterBy: action.payload };
    case 'SET_MAILS':
      return { ...state, mails: action.payload };
    case 'SET_INBOX_MAILS':
      return { ...state, inboxMails: action.payload };
    case 'SET_SPAM_MAILS':
      return { ...state, spamMails: action.payload };
    case 'SET_DELETED_MAILS':
      return { ...state, deletedMails: action.payload };
    default:
      return state;
  }
};

export default mailsReducer;
