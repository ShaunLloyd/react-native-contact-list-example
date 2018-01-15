import Contacts from 'react-native-contacts';

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
