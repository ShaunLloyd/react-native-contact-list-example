import type { ReduxAction } from 'common';
import { ADD_CONTACT_FORM_ACTIONS } from './add-contact-form.constants';
import type { AddContactFormState } from './add-contact-form.types';

export const INITIAL_ADD_CONTACT_FORM_STATE: AddContactFormState = {
  firstNameInput: '',
  firstNameError: '',
  lastNameInput: '',
  lastNameError: '',
  phoneNumberInput: '',
  phoneNumberError: '',
};

export const addContactFormReducer = (
  state: AddContactFormState = INITIAL_ADD_CONTACT_FORM_STATE,
  action: ReduxAction<string | null> = {},
): AddContactFormState => {
  switch (action.type) {
    case ADD_CONTACT_FORM_ACTIONS.SET_FIRST_NAME_INPUT: {
      return {
        ...state,
        firstNameInput: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.SET_FIRST_NAME_ERROR: {
      return {
        ...state,
        firstNameError: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.SET_LAST_NAME_INPUT: {
      return {
        ...state,
        lastNameInput: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.SET_LAST_NAME_ERROR: {
      return {
        ...state,
        lastNameError: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.SET_PHONE_NUMBER_INPUT: {
      return {
        ...state,
        phoneNumberInput: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.SET_PHONE_NUMBER_ERROR: {
      return {
        ...state,
        phoneNumberError: action.payload,
      };
    }
    case ADD_CONTACT_FORM_ACTIONS.CLEAR_FORM: {
      return {
        ...INITIAL_ADD_CONTACT_FORM_STATE,
      };
    }
    default: {
      return state;
    }
  }
};
