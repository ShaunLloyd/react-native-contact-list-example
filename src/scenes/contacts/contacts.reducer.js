import type { ReduxAction } from 'common';
import type { ContactState } from './contacts.types';
import { CONTACTS_ACTIONS } from './contacts.constants';

export const INITIAL_CONTACTS_STATE = {
  contacts: [],
  selectedContacts: [],
  showOnlySelected: false,
  isFetchingContacts: false,
};

export const contactsReducer = (
  state: ContactState = INITIAL_CONTACTS_STATE,
  action: ReduxAction<any, void> = {},
) => {
  switch (action.type) {
    case CONTACTS_ACTIONS.SET_CONTACTS: {
      return {
        ...state,
        contacts: action.payload,
        selectedContacts: [],
        showOnlySelected: false,
      };
    }
    case CONTACTS_ACTIONS.ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case CONTACTS_ACTIONS.SELECT_CONTACT: {
      return {
        ...state,
        selectedContacts: [...state.selectedContacts, action.payload],
      };
    }
    case CONTACTS_ACTIONS.DESELECT_CONTACT: {
      return {
        ...state,
        selectedContacts: state.selectedContacts
          .filter(contact => contact !== action.payload),
      };
    }
    case CONTACTS_ACTIONS.SET_SELECTED_ONLY: {
      return {
        ...state,
        showOnlySelected: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
