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
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchContacts();
    },
  }),
)(ContactsComponent);
