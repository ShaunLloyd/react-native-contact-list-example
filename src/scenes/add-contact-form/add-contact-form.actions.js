import type { ReduxAction } from 'common';
import { ADD_CONTACT_FORM_ACTIONS } from './add-contact-form.constants';

export const setFirstNameInput = (name: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_FIRST_NAME_INPUT,
  payload: name,
});

export const setFirstNameError = (error: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_FIRST_NAME_ERROR,
  payload: error,
});

export const setLastNameInput = (name: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_LAST_NAME_INPUT,
  payload: name,
});

export const setLastNameError = (error: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_LAST_NAME_ERROR,
  payload: error,
});

export const setPhoneNumberInput = (number: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_PHONE_NUMBER_INPUT,
  payload: number,
});

export const setPhoneNumberError = (error: string): ReduxAction<string> => ({
  type: ADD_CONTACT_FORM_ACTIONS.SET_PHONE_NUMBER_ERROR,
  payload: error,
});

export const clearForm = (): ReduxAction<> => ({
  type: ADD_CONTACT_FORM_ACTIONS.CLEAR_FORM,
});
