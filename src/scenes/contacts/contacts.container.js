import { compose, withHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { mapDispatchers } from 'utils';

import { Contact } from './contacts.types';
import { ContactsComponent } from './contacts.component';
import { contactsConnector } from './contacts.selectors';
import {
  setContacts,
  addContact,
  selectContact,
  deselectContact,
  setShowOnlySelected,
  setFetchingContacts,
  fetchContacts,
} from './contacts.actions';
import { SCENE_IDS } from '../scenes.constants';

const dispatchers = mapDispatchers({
  setContacts,
  addContact,
  selectContact,
  deselectContact,
  setShowOnlySelected,
  setFetchingContacts,
  fetchContacts,
});

export const ContactsContainer = compose(
  connect(contactsConnector, dispatchers),
  withHandlers({
    toggleContact: props => (contact: Contact) => contact.isSelected
      ? props.deselectContact(contact.recordID)
      : props.selectContact(contact.recordID),
    toggleShowSelectedOnly: props => () =>
      props.setShowOnlySelected(!props.showOnlySelected),
    navigateToAddContactForm: props => () =>
      props.navigator.push({ screen: SCENE_IDS.ADD_CONTACT }),
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchContacts();
    },
  }),
)(ContactsComponent);
