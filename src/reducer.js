import { combineReducers } from 'redux';

import { contactsReducer } from 'scenes/contacts';
import { addContactFormReducer } from 'scenes/add-contact-form';

export const rootReducer = combineReducers({
  contactsList: contactsReducer,
  addContactForm: addContactFormReducer,
});
