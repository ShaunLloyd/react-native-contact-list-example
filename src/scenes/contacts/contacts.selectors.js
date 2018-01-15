import R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const filterSelectedContacts = contacts =>
  contacts.filter(contact => contact.isSelected);

const sortContactsByGivenName = R.sortBy(R.prop('givenName'));

const contactsSelector = R.path(['contactsList', 'contacts']);
const selectedContactsSelector = R.path(['contactsList', 'selectedContacts']);
const showOnlySelectedSelector = R.path(['contactsList', 'showOnlySelected']);

const contactsListSelector = createSelector(
  contactsSelector,
  selectedContactsSelector,
  (contacts, selectedContacts) =>
    sortContactsByGivenName(contacts)
      .map(contact => ({
        ...contact,
        isSelected: R.find(val => val === contact.recordID)(selectedContacts),
      })),
);

const contactsForDisplaySelector = createSelector(
  contactsListSelector,
  showOnlySelectedSelector,
  (contactsList, showOnlySelected) => showOnlySelected
    ? filterSelectedContacts(contactsList)
    : contactsList,
);

export const contactsConnector = createStructuredSelector({
  contacts: contactsForDisplaySelector,
  showOnlySelected: showOnlySelectedSelector,
});
