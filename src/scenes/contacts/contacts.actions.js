import type { ReduxAction } from 'common';
import type { Contact } from './contacts.types';
import { CONTACTS_ACTIONS } from './contacts.constants';

export const setContacts = (contacts: Contact[]): ReduxAction<Contact[]> => ({
  type: CONTACTS_ACTIONS.SET_CONTACTS,
  payload: contacts,
});

export const addContact = (contact: Contact): ReduxAction<Contact> => ({
  type: CONTACTS_ACTIONS.ADD_CONTACT,
  payload: contact,
});

export const selectContact = (id: string): ReduxAction<string> => ({
  type: CONTACTS_ACTIONS.SELECT_CONTACT,
  payload: id,
});

export const deselectContact = (id: string): ReduxAction<string> => ({
  type: CONTACTS_ACTIONS.DESELECT_CONTACT,
  payload: id,
});

export const setShowOnlySelected = (bool: boolean): ReduxAction<Boolean> => ({
  type: CONTACTS_ACTIONS.SET_SELECTED_ONLY,
  payload: bool,
});

export const setFetchingContacts = (bool: boolean): ReduxAction<Boolean> => ({
  type: CONTACTS_ACTIONS.SET_FETCHING_CONTACTS,
  payload: bool,
});
