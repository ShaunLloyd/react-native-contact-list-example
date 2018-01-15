import Contacts from 'react-native-contacts';
import type { NewContact } from 'common';

export const fetchContactsService = () =>
  new Promise((resolve, reject) => {
    Contacts.getAll((err, contacts) => err ? reject() : resolve(contacts));
  });

export const transfromContactsFromDevice = contacts =>
  contacts.map(({ recordID, givenName, familyName, phoneNumbers }) => ({
    recordID,
    givenName,
    familyName,
    phoneNumbers,
  }));

export const addContactService = (contact: NewContact) =>
  new Promise((resolve, reject) => {
    Contacts.addContact(contact, err => err
      ? reject()
      : resolve());
  });
