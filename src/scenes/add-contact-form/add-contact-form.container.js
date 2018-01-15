import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { mapDispatchers } from 'utils';
import { addContactService } from 'services';
import { SCENE_IDS } from '../scenes.constants';

import { isNameValid, isPhoneNumberValid } from './add-contact-form.helpers';
import { AddContactFormComponent } from './add-contact-form.component';
import { addContactFormConnector } from './add-contact-form.selectors';
import {
  setFirstNameInput,
  setFirstNameError,
  setLastNameInput,
  setLastNameError,
  setPhoneNumberInput,
  setPhoneNumberError,
  clearForm,
} from './add-contact-form.actions';

const dispatchers = mapDispatchers({
  setFirstNameInput,
  setFirstNameError,
  setLastNameInput,
  setLastNameError,
  setPhoneNumberInput,
  setPhoneNumberError,
  clearForm,
});

export const AddContactFormContainer = compose(
  connect(addContactFormConnector, dispatchers),
  withHandlers({
    navigateBackToContacts: props => () => props.navigator.pop({ animated: true }),
    updateFirstName: props => (name: string) => {
      props.setFirstNameInput(name);
      if (props.firstNameError) props.setFirstNameError('');
    },
    validateFirstName: props => () => {
      const valid = isNameValid(props.firstNameInput);
      if (!valid) props.setFirstNameError('addContact:firstNameError.exists');
    },
    updateLastName: props => (name: string) => {
      props.setLastNameInput(name);
      if (props.lastNameError) props.setLastNameError('');
    },
    validateLastName: props => () => {
      const valid = isNameValid(props.lastNameInput);
      if (!valid) props.setLastNameError('addContact:lastNameError.exists');
    },
    updatePhoneNumber: props => (phoneNumber: string) => {
      props.setPhoneNumberInput(phoneNumber);
      if (props.phoneNumberError) props.setPhoneNumberError('');
    },
    validatePhoneNumber: props => () => {
      const valid = isPhoneNumberValid(props.phoneNumberInput);
      if (!valid) {
        props.setPhoneNumberError('addContact:phoneNumberError.tenDigits');
      }
    },
    submitContact: props => () => {
      if (props.isFormValid) {
        const contact = {
          givenName: props.firstNameInput,
          familyName: props.lastNameInput,
          phoneNumbers: [
            {
              label: 'mobile',
              number: props.phoneNumberInput,
            },
          ],
        };
        addContactService(contact)
          .then(() => props.navigator.resetTo({ screen: SCENE_IDS.CONTACTS }));
      }
    },
  }),
  lifecycle({
    componentWillUnmount() { this.props.clearForm(); },
  }),
)(AddContactFormComponent);
