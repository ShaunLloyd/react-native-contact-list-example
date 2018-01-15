import React from 'react';
import { FlatList } from 'react-native';
import { ContactsListItem } from './contacts-list-item.component';

import type { Contact } from '../contacts.types';

type Props = {
  contacts: Contact[],
  onContactSelect: (Contact) => void,
};

export const ContactsList = ({ contacts, onContactSelect }: Props) => (
  <FlatList
    data={contacts}
    keyExtractor={item => item.recordID}
    renderItem={({ item }) => (
      <ContactsListItem
        contact={item}
        handleToggleSelect={onContactSelect}
      />
    )}
  />
);
