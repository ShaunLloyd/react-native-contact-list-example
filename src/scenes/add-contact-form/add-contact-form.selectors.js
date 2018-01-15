import R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

import { isNameValid, isPhoneNumberValid } from './add-contact-form.helpers';

const isFormValidSelector = createSelector(
  R.path(['addContactForm', 'firstNameInput']),
  R.path(['addContactForm', 'lastNameInput']),
  R.path(['addContactForm', 'phoneNumberInput']),
  (firstNameInput, lastNameInput, phoneNumberInput) =>
    Boolean(
      isNameValid(firstNameInput) &&
      isNameValid(lastNameInput) &&
      isPhoneNumberValid(phoneNumberInput)),
);

export const addContactFormConnector = createStructuredSelector({
  firstNameInput: R.path(['addContactForm', 'firstNameInput']),
  firstNameError: R.path(['addContactForm', 'firstNameError']),
  lastNameInput: R.path(['addContactForm', 'lastNameInput']),
  lastNameError: R.path(['addContactForm', 'lastNameError']),
  phoneNumberInput: R.path(['addContactForm', 'phoneNumberInput']),
  phoneNumberError: R.path(['addContactForm', 'phoneNumberError']),
  isFormValid: isFormValidSelector,
});
