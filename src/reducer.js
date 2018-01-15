import { combineReducers } from 'redux';

import { contactsReducer } from 'scenes/contacts';

export const rootReducer = combineReducers({
  contactsList: contactsReducer,
});
